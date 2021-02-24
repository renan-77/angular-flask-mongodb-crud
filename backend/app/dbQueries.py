from bson import ObjectId

from app.models import Person


# Function to return a list of people based on aggregate.
def person_list_aggregate():
    return list(Person.Person.objects.aggregate(*[
        {
            # Joining two collections.
            '$lookup':
                {
                    'from': 'sex',
                    'localField': 'sex',
                    'foreignField': '_id',
                    'as': 'sex'
                }
        },
        {
            # Unwrapping data from array.
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
            # Declaring fields to be returned.
            '$project':
                {
                    '_id': 0,
                    # Converting ObjectID to string.
                    'id': {'$toString': '$_id'},
                    'name': 1,
                    # Setting field as field from embedded document.
                    'sex': '$sex.gender',
                    'address': {
                        # Concatenating the elements of address to display a full address.
                        '$concat': [
                            {
                                '$toString': '$address.number'

                            },
                            ' ',
                            '$address.street', ', ', '$address.city']

                    }
                }
        }
    ]))


def person_with_id(person_id):
    return list(Person.Person.objects().aggregate(*[
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
