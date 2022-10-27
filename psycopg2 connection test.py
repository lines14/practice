import paramiko

client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

client.connect('192.168.1.215', 2222, username='lines14', key_filename='/home/lines14/.ssh/id_ed25519')

stdin, stdout, stderr = client.exec_command('ls -a')

print(stdout.readlines())


import psycopg2
from sshtunnel import SSHTunnelForwarder

with SSHTunnelForwarder(
('192.168.1.215', 2222),
ssh_pkey="/home/lines14/.ssh/id_ed25519",
ssh_private_key_password="106107",
ssh_username="lines14",
remote_bind_address=('127.0.0.1', 8080)) as server:
    print(server.local_bind_port)

    conn = psycopg2.connect(user='admindb', password='106107', dbname="newdatabase", host="127.0.0.1", port="5432")
    curs = conn.cursor()
    sql = "select * from table1"
    curs.execute(sql)
    rows = curs.fetchall()
    print(rows)