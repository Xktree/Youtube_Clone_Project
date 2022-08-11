from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Reply

# Register your models here.
admin.site.register(Reply)
