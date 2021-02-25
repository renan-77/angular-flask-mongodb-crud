from mongoengine import ObjectIdField
from app import db
from bson.objectid import ObjectId
from app.models import abstractperson


# Declaring ADDRESS model
class Address(db.EmbeddedDocument):
    _id = ObjectIdField(required=True, default=ObjectId, unique=True, primary_key=True)
    number = db.IntField()
    street = db.StringField()
    city = db.StringField()
    eircode = db.StringField()

    # Declaring function for returning a full ADDRESS.
    def fullAddress(self, id):
        address = abstractperson.AbstractPerson.objects(_id=id).address
        return str(address.number + address.street + address.city + address.eircode)
