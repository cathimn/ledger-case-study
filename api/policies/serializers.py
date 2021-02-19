from rest_framework import serializers

from .models import AutoPolicy


class AutoPolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = AutoPolicy
        fields = '__all__'
