from django.urls import path, include
from rest_framework import routers
from .views import EmployeeViewSet, DepartmentViewSet

router=routers.DefaultRouter()
router.register(r'employee',EmployeeViewSet)
router.register(r'department',DepartmentViewSet)

urlpatterns=[
    path('',include(router.urls)),
]