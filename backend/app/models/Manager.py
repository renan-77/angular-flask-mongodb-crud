from app import db
from app.models import Person,Salesman


# Declaring ADDRESS model
class Manager(Person):
    # TODO resolve problem with salesman declaration for reference.
    subordinates = db.ListField(db.ReferenceField(Salesman, required=True))
    branch = db.StringField()
    department = db.StringField()

    # Method to return all the subordinates.
    def getSubordinates(self, id):
        return Manager.objects(_id=id).subordinates