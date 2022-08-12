from django.shortcuts import render
from rest_framework .decorators import api_view
from rest_framework .response import Response
from .models import User
from .serializers import CommentSerializer
from rest_framework import status

# Create your views here.

@api_view(['GET', 'POST', 'PUT'])
def user_comments(request):

    user = User.objects.all()

    if request.method == 'GET':
        serializer = CommentSerializer(user, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status.HTTP_201_CREATED)
    elif request.method == 'PUT':
        serializer = CommentSerializer(user, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status.HTTP_200_OK)


