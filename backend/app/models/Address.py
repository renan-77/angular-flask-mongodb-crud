from mongoengine import ObjectIdField
from app import db
from bson.objectid import ObjectId
from app.models import Person

class Address(db.EmbeddedDocument):
    _id = ObjectIdField(required=True, default=ObjectId, unique=True, primary_key=True)
    number = db.IntField()
    street = db.StringField()
    city = db.StringField()
    eircode = db.StringField()

    def fullName(self, id):
        address = Person.objects(_id=id).address
        return address.number + address.street + address.city + address.eircode