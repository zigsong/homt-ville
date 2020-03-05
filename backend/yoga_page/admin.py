from django.contrib import admin

from .models import Branch, Video

admin.site.register([Branch, Video])
