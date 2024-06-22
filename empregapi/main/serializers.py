from rest_framework import serializers
from .models import Employee, Department

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employee
        fields=('id','full_name','email','contact','address')
        
class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Department
        fields=('id','name','description')