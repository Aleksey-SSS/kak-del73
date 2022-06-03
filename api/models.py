from distutils.command.upload import upload
from operator import mod
from turtle import update
from venv import create
from django.db import models
from pyparsing import null_debug_action

# Create your models here.


class Note(models.Model):
    title = models.TextField(null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    update = models.DateTimeField(auto_now=True)
    create = models.DateTimeField(auto_now_add=True)
    model_img = models.ImageField(null=True, blank=True, upload_to='img/', verbose_name='Изображение')

    def __str__(self):
        return self.body[0:50]
