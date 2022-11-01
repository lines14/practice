import warnings
from cryptography.utils import CryptographyDeprecationWarning
from contextlib import closing

with warnings.catch_warnings():
    warnings.filterwarnings('ignore', category=CryptographyDeprecationWarning)
    import paramiko

    with closing(paramiko.SSHClient()) as client:
        client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        client.connect('192.168.1.215', 2222, username='lines14', key_filename='/home/lines14/.ssh/id_ed25519')

        stdin, stdout, stderr = client.exec_command('ls -a')
        for y in stdout.readlines():
            print(y)