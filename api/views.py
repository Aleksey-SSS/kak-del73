
import _tkinter
from email.mime import image
from pickle import GET
from urllib import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .utils import updateNote, getNoteDetail, deleteNote, getNotesList, createNote
import api
from .models import Note
from .serializers import NoteSerializer
from api import serializers
from .models import Note
from django.core.mail import send_mail


from django.http import JsonResponse


@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },


        {
            '/api/token',
            '/api/token/refresh'
        }

    ]
    return Response(routes)


# /notes GET
# /notes POST
# /notes/<id> GET
# /notes/<id> PUT
# /notes/<id> DELETE


@api_view(['GET', 'POST'])
def getNotes(request):

    if request.method == 'GET':
        return getNotesList(request)

    if request.method == 'POST':
        return createNote(request)



@api_view(['GET', 'PUT', 'DELETE'])
def getNote(request, pk):


    if request.method == 'GET':
        return getNoteDetail(request, pk)

    if request.method == 'PUT':
        return updateNote(request, pk)

    if request.method == 'DELETE':
        return deleteNote(request, pk)

@api_view(['POST'])
def postData(request):
    print(request)
    send_mail(
    'Subject here',
    'Here is the message.',
    'from@example.com',
    [request.email],
    fail_silently=False,
)
    return Response(status="ok")


def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]

    return JsonResponse(routes, safe=False)

