from app import db
from app.models import person


# Declaring ADDRESS model
class Manager(person.Person):
    # subordinates = db.ListField(db.ReferenceField(Salesman.Salesman, required=True))
    branch = db.StringField()
    department = db.StringField()

    # Method to return all the subordinates.
    def getSubordinates(self, id):
        return Manager.objects(_id=id).subordinates