

from pickle import GET
from urllib import response
from rest_framework import status
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import api
from api import serializers
from django.core.mail import send_mail

from rest_framework.views import APIView, exception_handler

from django.http import JsonResponse



@api_view(['POST'])
def postData(request):
    print('POOOOOOOOST',request.data)
    send_mail(
    'Новая заявка на вступление в клуб',
    'Поступила новая заявка в клуб.' +'\n' + request.data.get("fio") + '.' + '\n' + 'Дата рождения - ' + request.data.get("age") + '.' + '\n' + 'Коротко о себе:' + '\n' + request.data.get("info")  + '\n' + 'Контакты для связи:'  + '\n' + 'Телефон: ' + request.data.get("mobile")  + '\n' + 'E-mail: ' + request.data.get("email"),
    'aleksey.sazhnikovv@gmail.com',
    ['aleksey.sazhnikovv@gmail.com'],
    fail_silently=False,
)
    return Response(status=200)



