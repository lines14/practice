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

    cur.execute("select * from table3;")
    # data = cur.fetchall()
    # print(data)
    for row in cur:
        print(row)
    
    cur.execute(
        """INSERT INTO table3 (
            "Date", "Source", "Campaign", "Ad", "install", "purchase", "rowid") 
            VALUES ('2022-10-07', 'source E', 'Фирма11', 'Л', 11000, 110000, 11)
            ON CONFLICT DO NOTHING;""")
    print('---------------------------------------------------------------------------------------------------')
    print('INSERTING DATA...')
    print('---------------------------------------------------------------------------------------------------')

    cur.execute("select * from table3;")
    # data = cur.fetchall()
    # print(data)
    for row in cur:
        print(row)

    # cur.execute(
    #     """DELETE FROM table3 WHERE "rowid"='11';""")
    # print('---------------------------------------------------------------------------------------------------')
    # print('DELETING DATA...')
    # print('---------------------------------------------------------------------------------------------------')

    # cur = conn.cursor()
    # cur.execute("select * from table3;")
    # # data = cur.fetchall()
    # # print(data)
    # for row in cur:
    #     print(row)

    # cur.execute(
    #     """SELECT table3."Date", table3."Source", table3."Campaign", table3."Ad", 
    #         SUM(table2."Click") AS "sum Click", SUM(table2."Cost") AS "sum Cost", 
    #         SUM(table3."install") AS "sum install", SUM(table3."purchase") AS "sum purchase" 
    #         FROM table3
    #         LEFT JOIN table2 ON table3."install" = table2."Click"
    #         FULL OUTER JOIN table1 ON table2."Cost" = table1."Click"
    #         WHERE EXTRACT (MONTH FROM table3."Date") = 10
    #         GROUP BY table3."Date", table3."Source", table3."Campaign", table3."Ad"
    #         ORDER BY "Date";""")
    # # data = cur.fetchall()
    # # print(data)
    # for row in cur:
    #     print(row)

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