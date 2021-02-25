# from mongoengine import ObjectIdField
# from app import db
# from app.models import sex, address
#
#
# # Declaring PERSON model.
# class AbstractPerson(db.Document):
#     _id = ObjectIdField()
#     name = db.StringField()
#     # ReferenceField (Foreign Key).
#     sex = db.ReferenceField(sex.Sex, required=True)
#     # List of objects.
#     address = db.ListField(db.EmbeddedDocumentField(address.Address))
#
#     # Allowing Inheritance for extra models
#     meta = {'allow_inheritance': True, 'abstract': True}
