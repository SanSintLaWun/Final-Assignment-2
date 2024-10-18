from django.db import models
# python 3.8.2
# Create your models here.
class Info(models.Model):
    name=models.CharField(max_length=50)
    roll_number=models.CharField(max_length=10)
    email=models.CharField(max_length=50)
    phnumber=models.CharField(max_length=15)
    #degree=models.CharField(max_length=15)
    first_sem_marks=models.CharField(max_length=3)
    second_sem_marks=models.CharField(max_length=3)
    practical_marks=models.CharField(max_length=3)
    tutorial_marks=models.CharField(max_length=3)
    #assignment_marks=models.CharField(max_length=3)
    total_marks=models.CharField(max_length=3)
