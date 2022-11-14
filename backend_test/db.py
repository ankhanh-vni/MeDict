import json
import mariadb
import os 
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())


config = {
    'host' : '127.0.0.1',
    'port' : 3306,
    'user' : os.getenv("DB_USERNAME"),
    'password' : os.getenv("DB_PASSWORD"),
    'database' : 'test_project'
}

connection = mariadb.connect(**config)

# connection cursor
cur = connection.cursor()

# execute SQL statement
cur.execute('SELECT * FROM test_table LIMIT 5;')

row_headers = [x[0] for x in cur.description]
rv = cur.fetchall()

json_data = []

for result in rv:
    json_data.append(dict(zip(row_headers, result)))


print(json.dumps(json_data))


