from app import db
from app.models import Person, Manager


class Salesman(Person):
    branch = db.StringField()
    manager = db.RefereceField(Manager, required=True)
    working_hours = db.FloatField()
    base_salary = db.FloatField()
    comission = db.FloatField()

    def setComission(self, comission):
        return None

    def getTotalSalary(self):
        return None
