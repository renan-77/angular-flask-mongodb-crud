from mongoengine import ObjectIdField
from app import db


class Sex(db.Document):
    _id = ObjectIdField(required=True, unique=True, primary_key=True)
    gender = db.StringField()