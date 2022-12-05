import ssl
import socket
import os
import dotenv

# # блок исключений для работы в паблике с неверифицированными сертификатами:

# try:
#     _create_unverified_https_context = ssl._create_unverified_context
# except AttributeError:
#     # Legacy Python that doesn't verify HTTPS certificates by default
#     pass
# else:
#     # Handle target environment that doesn't support HTTPS verification
#     ssl._create_default_https_context = _create_unverified_https_context

# loading created .env file from Python PATH with login variables:

dotenv.load_dotenv()

# get() в случае отсутствия входящих данных выводит None вместо ошибки:

SERVER_HOSTNAME = os.environ.get('SERVER_HOSTNAME')
HOST_IP = os.environ.get('HOST_IP')
SOCKET_PORT = os.environ.get('SOCKET_PORT')
SOCKET_PORT = int(SOCKET_PORT)

out = 'Приветики, сервер!'

context = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
context.load_verify_locations('/home/lines14/projects/practice/Client-chain-certificate.pem')

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
    with context.wrap_socket(sock, server_hostname=SERVER_HOSTNAME) as ssock:
        ssock.connect((HOST_IP, SOCKET_PORT))
        ssock.sendall(out.encode())
        inn = ssock.recv(1024)
        print(inn.decode())