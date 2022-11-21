import warnings
from cryptography.utils import CryptographyDeprecationWarning
import psycopg2
import os
import dotenv

with warnings.catch_warnings():
    warnings.filterwarnings('ignore', category=CryptographyDeprecationWarning)
    from sshtunnel import SSHTunnelForwarder

# loading created .env file from Python PATH with login variables:

dotenv.load_dotenv()

# get() в случае отсутствия входящих данных выводит None вместо ошибки:

DB_HOST = os.environ.get('DB_HOST')
DB_PORT = os.environ.get('DB_PORT')
DB_PORT = int(DB_PORT)
DB_NAME = os.environ.get('DB_NAME')
DB_USER = os.environ.get('DB_USER')
DB_PASSWORD = os.environ.get('DB_PASSWORD')
SSH_HOST = os.environ.get('SSH_HOST')
SSH_PORT = os.environ.get('SSH_PORT')
SSH_PORT = int(SSH_PORT)
SSH_USERNAME = os.environ.get('SSH_USERNAME')
SSH_PKEY = os.environ.get('SSH_PKEY')

server = SSHTunnelForwarder(
    (SSH_HOST, SSH_PORT),
    ssh_username=SSH_USERNAME,
    ssh_pkey=SSH_PKEY,
    remote_bind_address=(DB_HOST, DB_PORT),
    local_bind_address=(DB_HOST, 65535))

server.start()

try:
    conn = psycopg2.connect(
        database=DB_NAME,
        user=DB_USER,
        host=server.local_bind_host,
        port=server.local_bind_port,
        password=DB_PASSWORD)
    conn.autocommit=False
    cur = conn.cursor()

    cur.execute("""select * from table1;""")
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
        """DELETE FROM table1 WHERE ""='';""")
    print('---------------------------------------------------------------------------------------------------')
    print('DELETING DATA...')
    print('---------------------------------------------------------------------------------------------------')

# Закомментированный conn.commit - проверка отображения итогового результата в консоли без перезаписи данных в БД,
# Раскомментированный conn.commit - перезапись данных в БД,
# Предупреждение о выборе в терминале не выводится!:

    # conn.commit()
    # print('---------------------------------------------------------------------------------------------------')
    # print('Транзакция успешно завершена')

except (Exception, psycopg2.DatabaseError) as error:
    print('---------------------------------------------------------------------------------------------------')
    print ('Ошибка в транзакции. Отмена всех остальных операций транзакции', error)
    print('---------------------------------------------------------------------------------------------------')
    conn.rollback()

finally:    
    if conn:        
        cur.close()        
        conn.close()    
        print('---------------------------------------------------------------------------------------------------')    
        print('Соединение с PostgreSQL закрыто')
        print('---------------------------------------------------------------------------------------------------')

server.stop()
print('Соединение SSH закрыто')
print('---------------------------------------------------------------------------------------------------')