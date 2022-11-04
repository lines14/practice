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

        with conn:
            with conn.cursor() as cur:
                cur.execute(
                    """INSERT INTO table1 ("") 
                        VALUES ('')
                        ON CONFLICT DO NOTHING;""")
                print('INSERTING DATA...')
                print('---------------------------------------------------------------------------------------------------')
                print('Транзакция успешно завершена')
                print('---------------------------------------------------------------------------------------------------')

        with conn:
            with conn.cursor() as cur:
                cur.execute(
                    """DELETE FROM table1 WHERE ""='';""")
                print('DELETING DATA...')
                print('---------------------------------------------------------------------------------------------------')
                print('Транзакция успешно завершена')
                print('---------------------------------------------------------------------------------------------------')

        conn.close()
        print('Соединение с PostgreSQL закрыто')
        print('---------------------------------------------------------------------------------------------------')

        server.stop()
        print('Соединение SSH закрыто')
        print('---------------------------------------------------------------------------------------------------')