from flask import Flask, jsonify
from flask_restplus import Api, Resource
from flask_cors import CORS

app = Flask(__name__)
api = Api(app=app, title='CRUD Api', doc='/apis')
CORS(app)

sampleData = {"id": 1, "name": "Renan", "age": 21, "job": "Software Engineer", "address": [{"number": 1, "street": "Trabeg Terrace", "city": "Cork", "eircode": "T12F4EO"}, {"number": 335, "street": "General Olimpio", "city": "Rio de Janeiro", "eircode": "23515-126"}]}

@api.route('/api', '/api/')
class GetAndPost(Resource):
    def get(self):
        return jsonify(sampleData)
    def post(self):
        data = api.payload
        api_request = data['api_request']
        return jsonify({"input": api_request})



if __name__ == '__main__':
    app.run()
