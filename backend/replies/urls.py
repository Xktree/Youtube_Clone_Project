from django.urls import path
from . import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('replies/<int:comment_id>/', views.replies_to_comment),
    path('new-reply/', views.new_reply)
]
