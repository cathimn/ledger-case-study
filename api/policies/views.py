from rest_framework import viewsets

from .models import AutoPolicy
from .serializers import AutoPolicySerializer


class AutoPolicyViewSet(viewsets.ModelViewSet):
    """
    Endpoint for querying for auto policies
    """
    serializer_class = AutoPolicySerializer
    queryset = AutoPolicy.objects.all().order_by('id')
    lookup_field = 'public_id'
