from django.db import models

# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default='No Description')
    city = models.CharField(max_length=255)
    address = models.TextField(default='No Address')


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default='No Description')
    salary = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)