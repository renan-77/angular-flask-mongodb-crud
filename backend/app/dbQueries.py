from bson import ObjectId

from app.models import Person


def person_list_aggregate():
    return list(Person.objects.aggregate(*[
        {
            '$lookup':
                {
                    'from': 'sex',
                    'localField': 'sex',
                    'foreignField': '_id',
                    'as': 'sex'
                }
        },
        {
            '$unwind':
                {
                    'path': '$sex'
                }
        },
        {
            '$unwind':
                {
                    'path': "$address"
                }
        },
        {
            '$project':
                {
                    '_id': 0,
                    'id': {'$toString': '$_id'},
                    'name': 1,
                    'sex': '$sex.gender',
                    'address': {
                        '$concat': [
                            {
                                '$toString': '$address.number'

                            },
                            ' ',
                            '$address.street', ', ', '$address.city' ]

                    }
                }
        }
    ]))


def person_with_id(person_id):
    return list(Person.objects().aggregate(*[
        {
            '$match': {'_id': ObjectId(person_id)}
        },
        {
            '$lookup': {
                    'from': 'sex',
                    'localField': 'sex',
                    'foreignField': '_id',
                    'as': 'sex'
                }
        },
        {
            '$unwind':{
                'path': '$sex'
            }
        },
        {
            '$unwind':{
                'path': '$address'
            }
        },
        {
            '$project': {
                '_id': 0,
                'id': {'$toString': '$_id'},
                'name': 1,
                'sex': {
                        'id': {'$toString': '$sex._id'},
                        'gender' : '$sex.gender'
                   },
                'address': {
                    'id': {'$toString':'$address._id'},
                    'number': '$address.number',
                    'street': '$address.street',
                    'city': '$address.city',
                    'eircode': '$address.eircode'
                }
            }
        }
]))