from mongoengine import ObjectIdField
from app import db
from app.models import Sex, Address


# Declaring PERSON model.
class Person(db.Document):
    _id = ObjectIdField()
    name = db.StringField()
    # ReferenceField (Foreign Key).
    sex = db.ReferenceField(Sex, required=True)
    # List of objects.
    address = db.ListField(db.EmbeddedDocumentField(Address))

    # Allowing Inheritance for extra models
    meta = {'allow_inheritance': True}
