from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EmployeeSerializer, DepartmentSerializer
from .models import Employee, Department

class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()
    
class DepartmentViewSet(viewsets.ModelViewSet):
    serializer_class=DepartmentSerializer
    queryset=Department.objects.all()
