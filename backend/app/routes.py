from bson import ObjectId
from flask import jsonify
from flask_restplus import Resource
from app import api, db_queries
from app.models.sex import Sex
from app.models.address import Address
from app.models.manager import Manager
from app.models.salesman import Salesman
from app.models.person import Person

@api.route('/person', '/person/')
class PersonAll(Resource):
    def get(self):
        try:
            cursor = db_queries.person_list_aggregate()
            return jsonify(cursor)
        except:
            return jsonify({'response': 'Sorry, an error has occurred'})

    def post(self):
        try:
            data = api.payload
            if Person(name=data['name'], sex=Sex(_id=data['sex']),
                      address=[Address(number=data['number'], street=data['street'], city=data['city'],
                                       eircode=data['eircode'])]).save():

                return jsonify({'response': 'Successfully added'})

        except:
            return jsonify({'response': 'Error on registration, please check with your admin'})


@api.route('/person/<person_id>')
class PersonById(Resource):
    def get(self, person_id):
        try:
            return jsonify(db_queries.person_with_id(person_id))
        except:
            return jsonify({'response': 'Sorry, the user id provided doesn\'t exist'})

    # PUT
    def put(self, person_id):
        data = api.payload

        # Convert String to ObjectID.
        data['sex'] = ObjectId(data['sex'])

        Person.objects(_id=person_id).update(**data)
        return jsonify(Person.objects(_id=data['_id']))

    # DELETE
    def delete(self, person_id):
        try:
            # Added the [0] place since the objects function returns an array of the objects
            name = Person.objects(_id=person_id)[0].name
            if Person.objects(_id=person_id).delete():
                return jsonify({'response': f'User {name} was deleted'})
        except:
            return jsonify({'response': 'An error has occurred'})


@api.route('/manager', '/manager/')
class Managers(Resource):
    def get(self):
        return jsonify(db_queries.get_managers())

    def post(self):
        data = api.payload

        Manager(name=data['name'], sex=Sex(_id=data['sex']),
               address=[Address(number=data['number'], street=data['street'], city=data['city'],
                                eircode=data['eircode'])], branch=data['branch'], department=data['department']).save()


@api.route('/salesman', '/salesman/')
class Salesmen(Resource):
    def get(self):
        return jsonify(db_queries.get_salesmen())

    def post(self):
        data = api.payload

        data['manager'] = ObjectId(data['manager'])

        # Converting string from manager to ObjectID
        Salesman(name=data['name'], sex=Sex(_id=data['sex']),
               address=[Address(number=data['number'], street=data['street'], city=data['city'],
                eircode=data['eircode'])], branch=data['branch'], manager=ObjectId(data['manager']),
                 working_hours=float(data['working_hours']), base_salary=data['base_salary'], commission=data['commission'])\
            .save()


@api.route('/sex', '/sex/')
class Gender(Resource):
    def get(self):
        return jsonify(db_queries.get_genders())
