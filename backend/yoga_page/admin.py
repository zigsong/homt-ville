from django.contrib import admin

from .models import Branch, Image, Video

admin.site.register([Branch, Image, Video])
