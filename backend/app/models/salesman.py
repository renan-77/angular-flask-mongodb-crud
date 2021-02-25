from app import db
from app.models import person, manager


# Declaring SALESMAN model
class Salesman(person.Person):
    branch = db.StringField()
    manager = db.ReferenceField(manager.Manager)
    working_hours = db.FloatField()
    base_salary = db.FloatField()
    commission = db.FloatField()

    def setComission(self, commission):
        return None

    def getTotalSalary(self):
        return None
