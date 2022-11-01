import psycopg2
import warnings
from cryptography.utils import CryptographyDeprecationWarning

with warnings.catch_warnings():
    warnings.filterwarnings('ignore', category=CryptographyDeprecationWarning)
    from sshtunnel import SSHTunnelForwarder

    with SSHTunnelForwarder(
        ('192.168.1.215', 2222),
        ssh_username='lines14',
        ssh_pkey="/home/lines14/.ssh/id_ed25519",
        remote_bind_address=('127.0.0.1', 5432),
        local_bind_address=('127.0.0.1', 65535)) as server:
        
        conn = psycopg2.connect(
            database="newdatabase",
            user='admindb',
            host=server.local_bind_host,
            port=server.local_bind_port,
            password='106107')

        with conn:
            with conn.cursor() as cur:
                cur.execute("select * from table3;")
                # data = cur.fetchall()
                # print(data)
                for row in cur:
                    print(row)
                print('---------------------------------------------------------------------------------------------------')
                print("Транзакция успешно завершена")
                print('---------------------------------------------------------------------------------------------------')

        with conn:
            with conn.cursor() as cur:
                cur.execute(
                    """INSERT INTO table3 (
                        "Date", "Source", "Campaign", "Ad", "install", "purchase", "rowid") 
                        VALUES ('2022-10-07', 'source E', 'Фирма11', 'Л', 11000, 110000, 11)
                        ON CONFLICT DO NOTHING;""")
                print('INSERTING DATA...')
                print('---------------------------------------------------------------------------------------------------')
                print("Транзакция успешно завершена")
                print('---------------------------------------------------------------------------------------------------')

        with conn:     
            with conn.cursor() as cur:
                cur.execute("select * from table3;")
                # data = cur.fetchall()
                # print(data)
                for row in cur:
                    print(row)
                print('---------------------------------------------------------------------------------------------------')
                print("Транзакция успешно завершена")
                print('---------------------------------------------------------------------------------------------------')

        # with conn:
        #     with conn.cursor() as cur:
        #         cur.execute(
        #             """DELETE FROM table3 WHERE "rowid"='11';""")
        #         print('DELETING DATA...')
        #         print('---------------------------------------------------------------------------------------------------')
        #         print("Транзакция успешно завершена")
        #         print('---------------------------------------------------------------------------------------------------')

        # with conn:
        #     with conn.cursor() as cur:
        #         cur.execute("select * from table3;")
        #         # data = cur.fetchall()
        #         # print(data)
        #         for row in cur:
        #             print(row)
        #         print('---------------------------------------------------------------------------------------------------')
        #         print("Транзакция успешно завершена")
        #         print('---------------------------------------------------------------------------------------------------')

        # with conn:
        #     with conn.cursor() as cur:
        #         cur.execute(
        #             """SELECT table3."Date", table3."Source", table3."Campaign", table3."Ad", 
        #                 SUM(table2."Click") AS "sum Click", SUM(table2."Cost") AS "sum Cost", 
        #                 SUM(table3."install") AS "sum install", SUM(table3."purchase") AS "sum purchase" 
        #                 FROM table3
        #                 LEFT JOIN table2 ON table3."install" = table2."Click"
        #                 FULL OUTER JOIN table1 ON table2."Cost" = table1."Click"
        #                 WHERE EXTRACT (MONTH FROM table3."Date") = 10
        #                 GROUP BY table3."Date", table3."Source", table3."Campaign", table3."Ad"
        #                 ORDER BY "Date";""")
        #         # data = cur.fetchall()
        #         # print(data)
        #         for row in cur:
        #             print(row)
        #         print('---------------------------------------------------------------------------------------------------')
        #         print("Транзакция успешно завершена")
        #         print('---------------------------------------------------------------------------------------------------')

        conn.close()
        print("Соединение с PostgreSQL закрыто")
        print('---------------------------------------------------------------------------------------------------')

        server.stop()
        print('Соединение SSH закрыто')
        print('---------------------------------------------------------------------------------------------------')