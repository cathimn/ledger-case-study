from rest_framework import viewsets
import rest_framework_filters as filters

from .models import AutoPolicy
from .serializers import AutoPolicySerializer


class AutoPolicyFilter(filters.FilterSet):
    class Meta:
        model = AutoPolicy
        fields = {
            'driver_age': ['exact', 'lt', 'gt'],
            'driver_gender': ['exact'],
            'driver_employment': ['exact'],
            'driver_marital': ['exact'],
            'driver_location': ['exact'],
            'vehicle_age': ['exact', 'lt', 'gt'],
            'vehicle_model': ['exact'],
            'insurance_premium': ['exact', 'lt', 'gt'],
            'insurance_claims': ['exact', 'lt', 'gt'],
            'insurance_losses': ['exact', 'lt', 'gt'],
        }


class AutoPolicyViewSet(viewsets.ModelViewSet):
    serializer_class = AutoPolicySerializer
    queryset = AutoPolicy.objects.all().order_by('id')
    lookup_field = 'public_id'
    filterset_class = AutoPolicyFilter
