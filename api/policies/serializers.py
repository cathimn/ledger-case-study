from rest_framework import serializers

from .models import AutoPolicy


class AutoPolicySerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(source='public_id')

    class Meta:
        model = AutoPolicy
        # fields = '__all__'
        exclude = ['public_id']
