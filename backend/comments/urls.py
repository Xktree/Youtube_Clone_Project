from django.urls import path, include
from . import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_by_comment),
    path('all/<str:video_id>/', views.all_comments),
    path('<int:comment_id>/update/', views.comment_by_id)
]
