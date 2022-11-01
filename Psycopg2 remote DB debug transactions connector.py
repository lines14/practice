import warnings
from cryptography.utils import CryptographyDeprecationWarning
import psycopg2

with warnings.catch_warnings():
    warnings.filterwarnings('ignore', category=CryptographyDeprecationWarning)
    from sshtunnel import SSHTunnelForwarder

server = SSHTunnelForwarder(
    ('192.168.1.215', 2222),
    ssh_username='lines14',
    ssh_pkey="/home/lines14/.ssh/id_ed25519",
    remote_bind_address=('127.0.0.1', 5432),
    local_bind_address=('127.0.0.1', 65535))

server.start()

try:
    conn = psycopg2.connect(
    database="newdatabase",
    user='admindb',
    host=server.local_bind_host,
    port=server.local_bind_port,
    password='106107')
    conn.autocommit=False
    cur = conn.cursor()

    cur.execute("select * from table1;")
    # data = cur.fetchall()
    # print(data)
    for row in cur:
        print(row)

    cur.execute(
        """INSERT INTO table1 ("") 
            VALUES ('')
            ON CONFLICT DO NOTHING;""")
    print('---------------------------------------------------------------------------------------------------')
    print('INSERTING DATA...')
    print('---------------------------------------------------------------------------------------------------')

    cur.execute(
        """DELETE FROM table3 WHERE "rowid"='11';""")
    print('---------------------------------------------------------------------------------------------------')
    print('DELETING DATA...')
    print('---------------------------------------------------------------------------------------------------')

# Закомментированный conn.commit - проверка правильности введённого запроса в консоли без перезаписи данных в БД,
# Раскомментированный conn.commit - перезапись данных в БД,
# Предупреждение о выборе в терминале не выводится!:

    # conn.commit()
    # print('---------------------------------------------------------------------------------------------------')
    # print("Транзакция успешно завершена")

except (Exception, psycopg2.DatabaseError) as error:
    print('---------------------------------------------------------------------------------------------------')
    print ("Ошибка в транзакции. Отмена всех остальных операций транзакции", error)
    print('---------------------------------------------------------------------------------------------------')
    conn.rollback()

finally:    
    if conn:        
        cur.close()        
        conn.close()    
        print('---------------------------------------------------------------------------------------------------')    
        print("Соединение с PostgreSQL закрыто")
        print('---------------------------------------------------------------------------------------------------')

server.stop()
print('Соединение SSH закрыто')
print('---------------------------------------------------------------------------------------------------')