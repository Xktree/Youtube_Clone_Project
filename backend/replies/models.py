from django.db import models
from authentication.models import User

# Create your models here.

class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_type')
    comment = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reply_comment_type')
    text = models.CharField(max_length=255)
