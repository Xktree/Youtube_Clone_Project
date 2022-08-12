from rest_framework .decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework .response import Response
from .models import Reply
from .models import Comment
from .serializers import ReplySerializer
from rest_framework import status

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def comment_by_id(request, comment_id):
    comment = Comment.objects.get(pk = comment_id)
    if request.method == 'POST':
        print(
            'Comment ', request.comment.id)
        serializer = ReplySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status.HTTP_201_CREATED)
    elif request.method == 'GET':
        reply = Reply.objects.filter(comment = request.comment.id)
        serializer = ReplySerializer(reply, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    

