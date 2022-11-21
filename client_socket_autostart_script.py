import socket
import os
import dotenv

# loading created .env file from Python PATH with login variables:

dotenv.load_dotenv()

# get() в случае отсутствия входящих данных выводит None вместо ошибки:

HOST_IP = os.environ.get('HOST_IP')
SOCKET_PORT = os.environ.get('SOCKET_PORT')
SOCKET_PORT = int(SOCKET_PORT)

out = 'Приветики, сервер!'

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
    sock.connect((HOST_IP, SOCKET_PORT))
    sock.sendall(out.encode())
    inn = sock.recv(1024)
    print(inn.decode())