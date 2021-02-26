from bson import ObjectId

from app.models import person


# Function to return a list of people based on aggregate.
def person_list_aggregate():
    return list(person.Person.objects.aggregate(*[
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
            '$lookup':
                    {
                        'from': 'person',
                        'localField': 'manager',
                        'foreignField': '_id',
                        'as': 'manager'
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
            '$unwind':
                {
                    'path': "$manager",
                    'preserveNullAndEmptyArrays': True
                }
        },
        {
            '$project':
                {
                    '_id': 0,
                    'id': {'$toString': '$_id'},
                    'name': 1,
                    'sex': '$sex.gender',
                    'class': '$manager.name',
                    'branch': '$branch',
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
    return list(person.Person.objects().aggregate(*[
        {
            # Filtering the query by person id.
            '$match': {'_id': ObjectId(person_id)}
        },
        {
            # Joining two collections.
            '$lookup': {
                'from': 'sex',
                'localField': 'sex',
                'foreignField': '_id',
                'as': 'sex'
            }
        },
        {
            # Unwrapping data from array.
            '$unwind': {
                'path': '$sex'
            }
        },
        {
            '$unwind': {
                'path': '$address'
            }
        },
        {
            # Declaring fields to be returned.
            '$project': {
                '_id': 0,
                'id': {'$toString': '$_id'},
                'name': 1,
                # Declaring a field to be an object with selected values inside.
                'sex': {
                    # Converting ObjectID to string
                    'id': {'$toString': '$sex._id'},
                    'gender': '$sex.gender'
                },
                # Declaring a field to be an object with selected values inside.
                'address': {
                    # Converting ObjectID to string
                    'id': {'$toString': '$address._id'},
                    'number': '$address.number',
                    'street': '$address.street',
                    'city': '$address.city',
                    'eircode': '$address.eircode'
                }
            }
        }
    ]))


def find_by_id(id):
    return person.Person.objects(_id=id)
