from rest_framework .decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework .response import Response
from .models import Reply
from .serializers import ReplySerializer
from rest_framework import status

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def replies_to_comment(request, comment_id):
    if request.method == 'GET':
        reply = Reply.objects.filter(comment_id = comment_id)
        serializer = ReplySerializer(reply, many=True)
        return Response(serializer.data, status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def new_reply(request):
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    

