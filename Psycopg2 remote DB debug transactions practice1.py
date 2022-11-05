import psycopg2
import os

DB_HOST = os.environ.get('DB_HOST')
DB_PORT = os.environ.get('DB_PORT')
DB_PORT = int(DB_PORT)
DB_NAME = os.environ.get('DB_NAME')
DB_USER = os.environ.get('DB_USER')
DB_PASSWORD = os.environ.get('DB_PASSWORD')

try:
    connection = psycopg2.connect(user=DB_USER, password=DB_PASSWORD, host=DB_HOST, port=DB_PORT, database=DB_NAME)   
    connection.autocommit=False    
    cursor = connection.cursor()    

    amount = 200    
    query = """select price from mobile where id = 1"""    
    cursor.execute(query)    

    record = cursor.fetchone()[0]    
    price_a  = int(record)    
    price_a -= amount    
    sql_update_query = """update mobile set price = %s where id = 1"""    
    cursor.execute(sql_update_query,(price_a,))   

    query = """select price from mobile where id = 2"""    
    cursor.execute(query)   

    record = cursor.fetchone()[0]    
    price_b = int(record)    
    price_b += amount       
    sql_update_query = """Update mobile set price = %s where id = 2"""    
    cursor.execute(sql_update_query, (price_b,))  
          
    connection.commit()    
    print('Транзакция успешно завершена')

except (Exception, psycopg2.DatabaseError) as error :    
    print ('Ошибка в транзакции. Отмена всех остальных операций транзакции', error)
    connection.rollback()

finally:    
    if connection:        
        cursor.close()        
        connection.close()        
        print('Соединение с PostgreSQL закрыто')