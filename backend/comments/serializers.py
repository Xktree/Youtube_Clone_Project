from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'video_id', 'text', 'likes', 'dislikes']
        depth = 1
        
    likes=serializers.IntegerField(read_only=True) 
    dislikes=serializers.IntegerField(read_only=True) 