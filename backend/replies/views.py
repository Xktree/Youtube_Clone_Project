from django.shortcuts import render
from rest_framework .decorators import api_view
from rest_framework .response import Response
from .models import Reply
from .serializers import ReplySerializer
from rest_framework import status

# Create your views here.

@api_view(['GET', 'POST'])
def user_replies(request):

    reply = Reply.objects.all()

    if request.method == 'GET':
        serializer = ReplySerializer(reply, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status.HTTP_201_CREATED)
