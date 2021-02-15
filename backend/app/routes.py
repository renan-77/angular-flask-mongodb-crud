from flask import jsonify
from flask_restplus import Resource
from app import app, api
from app.models import Person, Address, Sex


@api.route('/person', '/person/')
class PersonAll(Resource):
    def get(self):
        try:
            return jsonify(Person.objects.all())
        except:
            return jsonify({'response': 'Sorry, an error has occurred'})

    def post(self):
        try:
            if Person(name='USERNAME', sex=Sex(_id='602a593d3149eb362c296561'),
                      address=[Address(number=1, street='STREET 1', city='CITY 1', eircode='EIRCODE 1'),
                               Address(number=2, street='STREET 2', city='CITY 2', eircode='EIRCODE 2')]
                      ).save():
                return jsonify({'status': 'Successfully added'})
        except Exception as e:
            return jsonify({'status': 'Error on registration, please check with your admin'})
        # data = api.payload
        # api_request = data['api_request']
        # return jsonify({"input": api_request})


@api.route('/person/<person_id>')
class PersonById(Resource):
    def get(self, person_id):
        try:
            return jsonify(Person.objects(_id=person_id))
        except Exception as e:
            return jsonify({'response': 'Sorry, the user id provided doesn\'t exist'})

    # PUT
    def put(self, person_id):
        data = api.payload
        Person.objects(user_id=person_id).update(**data)
        return jsonify(Person.objects(_id=data['_id']))

    # DELETE
    def delete(self, person_id):
        try:
            # Added the [0] place since the objects function returns an array of the objects
            name = Person.objects(_id=person_id)[0].name
            print(name)
            if Person.objects(_id=person_id).delete():
                print('Deleted')
                return jsonify({'response': f'User {name} is deleted'})
        except Exception as e:
            return jsonify({'response': 'An error has occurred'})
