from flask import Flask, request, Blueprint, render_template, request, flash, jsonify, make_response, session
from flask import Blueprint, render_template, request, flash, redirect, url_for
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy
import sys

app = Flask(__name__, template_folder=".")
app.secret_key = "0aca5922c1334b0020f379fc"
api = Api(app)
# app.config['SQLALCHEMY_DATABASEURI'] = 'sqlite:///database.db'
# db = SQLAlchemy(app)
# db.create_all() # create the database

dictionary = {"hello":"xin chao", "goodbye":"tam biet", "morning":"buoi sang}


# We will make a class that is resource and this resource will have some methods that
# handle get, post request

# def abort_if_video_id_doesnt_exist(video_id):
#     if video_id not in videos:
#         abort(404, message="Video is not valid...")

# def abort_if_video_exists(video_id):
#     if video_id in videos:
#         abort(409, message="Video already exists with that id")

resource_fields = {
   'inp' : fields.String,
   'language' : fields.Boolean
   }

parser = reqparse.RequestParser()
parser.add_argument('inp', type=str)
parser.add_argument('language', type=bool)


class Dict(Resource):
    @marshal_with(resource_fields)
    def get(self):
        args = parser.parse_args()
        inp = args['inp']
        language = args['language']
        if language:
            if inp == None:
                return make_response(render_template('index.html'))
            elif (inp in dictionary):
                return f"{inp} : {dictionary[inp]}"
            else:
                return "The word doesnt exist!"
        else:
            if inp == None:
                return make_response(render_template('index.html'))
            elif (inp in dictionary.values):
                english = dictionary[dictionary.index(inp)]
                return f"{inp} : {english}"



# Add the resource to the API and make it accessible through the URL
# Ex: if we sent a get request to "/helloworld", it should return the info Hello World
api.add_resource(Dict, "/")

if __name__ == "__main__":
    app.run()
