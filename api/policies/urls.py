from rest_framework import routers
from django.urls import path, include

from .views import AutoPolicyViewSet

router = routers.DefaultRouter()
router.register(r'policies', AutoPolicyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
