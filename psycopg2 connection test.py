import warnings

from cryptography.utils import CryptographyDeprecationWarning
warnings.filterwarnings(action='ignore', category=CryptographyDeprecationWarning)

import psycopg2
from sshtunnel import SSHTunnelForwarder

# For interactive work (on ipython) it's easier to work with explicit objects
# instead of contexts.

# Create an SSH tunnel
tunnel = SSHTunnelForwarder(
    ('192.168.1.215', 2222),
    ssh_username='lines14',
    ssh_private_key='/home/lines14/.ssh/id_ed25519',
    remote_bind_address=('localhost', 5432),
    local_bind_address=('localhost',6543), # could be any available port
)
# Start the tunnel
tunnel.start()

# # Create a database connection
# conn = psycopg2.connect(
#     database='newdatabase',
#     user='admindb',
#     host=tunnel.local_bind_host,
#     port=tunnel.local_bind_port,
# )

# # Get a database cursor
# cur = conn.cursor()

import os

files = os.listdir("/home/lines14")
print(files)