from flask import Flask, jsonify
from flask_restplus import Api, Resource
import json

app = Flask(__name__)
api = Api(app=app, title='CRUD Api', doc='/apis')


@api.route('/api', '/api/')
class GetAndPost(Resource):
    def get(self):
        return jsonify({"hello": "World"})
    def post(self):
        data = api.payload
        api_request = data['api_request']
        return jsonify({"Input": api_request})



if __name__ == '__main__':
    app.run()
