from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Car

# Register your models here.
admin.site.register(Car)
