import warnings
from cryptography.utils import CryptographyDeprecationWarning
with warnings.catch_warnings():
    warnings.filterwarnings('ignore', category=CryptographyDeprecationWarning)
    import paramiko

client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
client.connect('192.168.1.215', 2222, username='lines14', key_filename='/home/lines14/.ssh/id_ed25519')

stdin, stdout, stderr = client.exec_command('ifconfig')
for y in stdout.readlines():
    print(y)

client.close()