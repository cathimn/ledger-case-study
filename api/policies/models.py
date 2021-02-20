import uuid

from django.db import models


class AutoPolicy(models.Model):
    id = models.AutoField(primary_key=True)
    public_id = models.UUIDField(default=uuid.uuid4, unique=True)

    # Policy start date
    year = models.IntegerField()
    month = models.IntegerField()

    # Features
    driver_age = models.IntegerField()
    driver_gender = models.CharField(max_length=255)
    driver_employment = models.CharField(max_length=255)
    driver_marital = models.CharField(max_length=255)
    driver_location = models.CharField(max_length=255)
    vehicle_age = models.IntegerField()
    vehicle_model = models.CharField(max_length=255)

    # Metrics
    insurance_premium = models.DecimalField(decimal_places=2, max_digits=12)
    insurance_claims = models.IntegerField()
    insurance_losses = models.DecimalField(decimal_places=2, max_digits=12)
