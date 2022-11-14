from flask import Flask
from flask_restful import Api, Resource
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


app = Flask(__name__)
api = Api(app)

videos = {}

def get_connection():
    connection = mariadb.connect(**config)

    # connection cursor
    cur = connection.cursor()
    return cur


class MedicalDictionary(Resource):
    def get(self, prompt):
        cur = get_connection()
        query = f"""SELECT * FROM test_table
        WHERE eng LIKE \"{prompt}%\" LIMIT 1;
        """

        cur.execute(query)

        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
            json_data.append(dict(zip(row_headers, result)))
        
        return json_data[0]
        

    def put(self, video_id):
        pass


api.add_resource(MedicalDictionary, "/eng/<string:prompt>")


if __name__ == "__main__":
    app.run(debug=True)
