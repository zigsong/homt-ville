from django.contrib import admin

from .models import Branch, Images, Video

admin.site.register([Branch, Images, Video])
