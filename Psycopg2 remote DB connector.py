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

# connection.rollback()
# or
# conn.commit()

cur.close()
conn.close()
server.stop()