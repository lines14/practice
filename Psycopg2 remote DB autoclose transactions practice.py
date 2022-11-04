import psycopg2
import warnings
from cryptography.utils import CryptographyDeprecationWarning
import os

# Подтягивает переменные окружения из .bashrc:

DB_HOST = os.environ['DB_HOST']
DB_PORT = os.environ['DB_PORT']
DB_PORT = int(DB_PORT)
DB_NAME = os.environ['DB_NAME']
DB_USER = os.environ['DB_USER']
DB_PASSWORD = os.environ['DB_PASSWORD']
SSH_HOST = os.environ['SSH_HOST']
SSH_PORT = os.environ['SSH_PORT']
SSH_PORT = int(SSH_PORT)
SSH_USERNAME = os.environ['SSH_USERNAME']
SSH_PKEY = os.environ['SSH_PKEY']

with warnings.catch_warnings():
    warnings.filterwarnings('ignore', category=CryptographyDeprecationWarning)
    from sshtunnel import SSHTunnelForwarder

    with SSHTunnelForwarder(
        (SSH_HOST, SSH_PORT),
        ssh_username=SSH_USERNAME,
        ssh_pkey=SSH_PKEY,
        remote_bind_address=(DB_HOST, DB_PORT),
        local_bind_address=(DB_HOST, 65535)) as server:
        
        conn = psycopg2.connect(
            database=DB_NAME,
            user=DB_USER,
            host=server.local_bind_host,
            port=server.local_bind_port,
            password=DB_PASSWORD)

        with conn:
            with conn.cursor() as cur:
                cur.execute("""select * from table1;""")
                # data = cur.fetchall()
                # print(data)
                for row in cur:
                    print(row)
                print('---------------------------------------------------------------------------------------------------')
                print('Транзакция успешно завершена')
                print('---------------------------------------------------------------------------------------------------')

        # with conn:
        #     with conn.cursor() as cur:
        #         cur.execute(
        #             """INSERT INTO table1 (
        #                 "Date", "Campaign", "Ad", "Impression", "Click", "Cost") 
        #                 VALUES ('2022-11-03', 'Фирма4', 'Ролик', 10, 110, 11000)
        #                 ON CONFLICT DO NOTHING;""")
        #         print('INSERTING DATA...')
        #         print('---------------------------------------------------------------------------------------------------')
        #         print('Транзакция успешно завершена')
        #         print('---------------------------------------------------------------------------------------------------')

        # with conn:     
        #     with conn.cursor() as cur:
        #         cur.execute("""select * from table1;""")
        #         # data = cur.fetchall()
        #         # print(data)
        #         for row in cur:
        #             print(row)
        #         print('---------------------------------------------------------------------------------------------------')
        #         print('Транзакция успешно завершена')
        #         print('---------------------------------------------------------------------------------------------------')

        # with conn:
        #     with conn.cursor() as cur:
        #         cur.execute(
        #             """DELETE FROM table4 WHERE "Campaign"='Фирма4';""")
        #         print('DELETING DATA...')
        #         print('---------------------------------------------------------------------------------------------------')
        #         print('Транзакция успешно завершена')
        #         print('---------------------------------------------------------------------------------------------------')

        # with conn:
        #     with conn.cursor() as cur:
        #         cur.execute("""select * from table1;""")
        #         # data = cur.fetchall()
        #         # print(data)
        #         for row in cur:
        #             print(row)
        #         print('---------------------------------------------------------------------------------------------------')
        #         print('Транзакция успешно завершена')
        #         print('---------------------------------------------------------------------------------------------------')

        # with conn:
        #     with conn.cursor() as cur:
        #         cur.execute(
        #             """SELECT STRING_AGG(TO_CHAR(table3."Date", 'YYYY-MM-DD'), ', ' ORDER BY table3."Campaign", table3."Date") AS "Date", 
	    #                 STRING_AGG(table3."Source", ', ' ORDER BY table3."Campaign", table3."Date") AS "Source", 
	    #                 table3."Campaign", 
	    #                 STRING_AGG(table3."Ad", ', ' ORDER BY table3."Campaign", table3."Date") AS "Ad", 
	    #                 table2."Click" + table1."Click" AS "SUM(Click)", 
	    #                 table2."Cost" + table1."Cost" AS "SUM(Cost)", 
	    #                 SUM(table3."install") AS "SUM(install)", 
	    #                 SUM(table3."purchase") AS "SUM(purchase)"   
	    #                 FROM table3
        #                 JOIN table2 ON table3."Campaign" = table2."Campaign"
        #                 JOIN table1 ON table2."Campaign" = table1."Campaign"
        #                 WHERE EXTRACT (MONTH FROM table3."Date") = 11
        #                 GROUP BY table3."Campaign", table2."Click", table1."Click", table2."Cost", table1."Cost"
        #                 ORDER BY "Campaign";""")
        #         # data = cur.fetchall()
        #         # print(data)
        #         for row in cur:
        #             print(row)
        #         print('---------------------------------------------------------------------------------------------------')
        #         print('Транзакция успешно завершена')
        #         print('---------------------------------------------------------------------------------------------------')

        conn.close()
        print('Соединение с PostgreSQL закрыто')
        print('---------------------------------------------------------------------------------------------------')

        server.stop()
        print('Соединение SSH закрыто')
        print('---------------------------------------------------------------------------------------------------')