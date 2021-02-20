from rest_framework import serializers

from .models import AutoPolicy


class AutoPolicySerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(source='public_id')

    class Meta:
        model = AutoPolicy
        exclude = ['public_id']
