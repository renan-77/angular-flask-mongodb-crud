from mongoengine import ObjectIdField
from app import db


# Declaring SEX model.
class Sex(db.Document):
    _id = ObjectIdField(required=True, unique=True, primary_key=True)
    gender = db.StringField()
