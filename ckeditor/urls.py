from django.urls import path
from .views import *

urlpatterns = [
    path('upload/', upload_view)
]
