import uuid

from django.db import models


class AutoPolicy(models.Model):
    class DriverGender(models.TextChoices):
        MALE = 'male'
        FEMALE = 'female'

    class DriverEmployment(models.TextChoices):
        EMPLOYED = 'employed'
        UNEMPLOYED = 'unemployed'
        HOMEMAKER = 'homemaker'
        RETIRED = 'retired'
        OTHER = 'other_emp'
        STUDENT = 'student'

    class DriverMaritalStatus(models.TextChoices):
        MARRIED = 'married'
        SINGLE = 'single'

    class DriverLocation(models.TextChoices):
        SUBURBAN = 'suburban'
        URBAN = 'urban'
        RURAL = 'rural'

    class VehicleModel(models.TextChoices):
        COUPE = 'coupe_cabriolet'
        VAN = 'van'
        SEDAN = 'sedan'
        SUV = 'suv'
        OTHER = 'other_model'
        HATCHBACK = 'hatchback'
        PICKUP = 'pickup'

    public_id = models.UUIDField(default=uuid.uuid4, unique=True)

    # Policy start year/month
    year = models.IntegerField()
    month = models.IntegerField()

    # Features
    driver_age = models.IntegerField()
    driver_gender = models.CharField(max_length=255, choices=DriverGender.choices)
    driver_employment = models.CharField(max_length=255, choices=DriverEmployment.choices)
    driver_marital = models.CharField(max_length=255, choices=DriverMaritalStatus.choices)
    driver_location = models.CharField(max_length=255, choices=DriverLocation.choices)
    vehicle_age = models.IntegerField()
    vehicle_model = models.CharField(max_length=255, choices=VehicleModel.choices)

    # Metrics
    insurance_premium = models.FloatField()
    insurance_claims = models.IntegerField()
    insurance_losses = models.FloatField()
