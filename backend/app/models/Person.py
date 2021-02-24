from mongoengine import ObjectIdField
from app import db
from app.models import Sex, Address

class Person(db.Document):
    _id = ObjectIdField()
    name = db.StringField()
    sex = db.ReferenceField(Sex, required=True)
    address = db.ListField(db.EmbeddedDocumentField(Address))

    meta = {'allow_inheritance': True}