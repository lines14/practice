import psycopg2
import os

DB_HOST = os.environ.get('DB_HOST')
DB_PORT = os.environ.get('DB_PORT')
DB_PORT = int(DB_PORT)
DB_NAME = os.environ.get('DB_NAME')
DB_USER = os.environ.get('DB_USER')
DB_PASSWORD = os.environ.get('DB_PASSWORD')
   
connection = psycopg2.connect(user=DB_USER, password=DB_PASSWORD, host=DB_HOST, port=DB_PORT, database=DB_NAME)   

with connection:       
    with connection.cursor() as cursor:             
        query = """select price from itemstable where itemid = 876"""           
        cursor.execute(query)     

        record = cursor.fetchone()[0]           
        item_price = int(record)             
        query = """select balance from ewallet where userId = 23"""           
        cursor.execute(query)  

        record = cursor.fetchone()[0]          
        ewallet_balance  = int(record)           
        ewallet_balance -= item_price                      
        sql_update_query = """Update ewallet set balance = %s where id = 23"""           
        cursor.execute(sql_update_query,(ewallet_balance,))   

        query = """select balance from account where accountId = 2236781258763"""           
        cursor.execute(query)    

        record = cursor.fetchone()           
        account_balance  = int(record)           
        account_balance += item_price           
        sql_update_query = """Update account set balance = %s where id = 132456"""           
        cursor.execute(sql_update_query, (account_balance,))  
                
        print("Транзакция успешно завершена")