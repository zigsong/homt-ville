from django.shortcuts import render
from django.http import Http404
from django.http.response import JsonResponse
from django.conf import settings

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser # for Image

from .models import Branch, Image, Video
from .serializers import BranchSerializer, ImageSerializer, VideoSerializer

import requests
import os

class BranchList(APIView):
    def post(self, request, format=None):
        serializer = BranchSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, format=None):
        queryset = Branch.objects.all()
        serializer = BranchSerializer(queryset, many=True) # multiple branch model instances
        return Response(serializer.data)

class BranchDetail(APIView):
    def get_object(self, name): 
        try:
            return Branch.objects.get(name=name)
        except Branch.DoesNotExist:
            raise Http404

    def get(self, request, name):
        branch = self.get_object(name)
        serializer = BranchSerializer(branch)
        return Response(serializer.data)

    def put(self, request, name, format=None):
        branch = self.get_object(name)
        serializer = BranchSerializer(branch, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, name, format=None):
        branch = self.get_object(name)
        branch.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ImagesView(APIView):
    # parser_classes = (MultiPartParser, FormParser)
    def get_object(self, name):
        branch = Branch.objects.get(name=name)
        try:
            return Image.objects.filter(branch=branch)
        except Image.DoesNotExist:
            raise Http404

    def get(self, request, name):
        branch = Branch.objects.get(name=name)
        image_set = Image.objects.filter(branch=branch)
        serializer = ImageSerializer(image_set, many=True)
        return Response(serializer.data)
    
    def post(self, request, name, *args, **kwargs):
        branch = Branch.objects.get(name=name)
        images = request.FILES

class VideoList(APIView):        
    def get_object(self, name):
        branch = Branch.objects.get(name=name)
        try:
            return Video.objects.filter(branch=branch)
        except Video.DoesNotExist:
            raise Http404
    
    def searchData(self, name):
        # YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?part=id/&q=%s&key=%s'
        branch = Branch.objects.get(name=name)
        searchkw = branch.translation
        API_KEY = os.getenv("YOUTUBE_API_KEY")
        print(API_KEY)
        response = requests.get(
            'https://www.googleapis.com/youtube/v3/search?part=id&q=%s&key=%s'
            %(branch.translation, API_KEY)
        )
        videoData = response.json()
        videoID_list = []
        for item in videoData.get('items'):
            videoID_list.append(item['id']['videoId'])
        return videoID_list # list로 반환됨 

    def get(self, request, name, format=None):
        video_set = self.get_object(name)
        serializer = VideoSerializer(video_set, many=True)
        return Response(serializer.data)

    def post(self, name, *args, **kwargs):
        videoID_list = self.searchData(name)
        for videoID in videoID_list:
            request = {
                'branch': name,
                'video_id': videoID,
                'level': "",
                'runtime': 0,
            }
        serializer = VideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
def get_youtube_data(request, name): 
    branch = Branch.objects.get(name=name)
    API_KEY = os.environ.get("YOUTUBE_API_KEY")    
    response = requests.get(
        'https://www.googleapis.com/youtube/v3/search?part=id&q=%s&key=%s'
        %(branch.translation, API_KEY)
    )
    videoData = response.json()
    videoID_list = []
    for item in videoData.get('items'):
        videoID_list.append(item['id']['videoId'])
    # return videoID_list # list로 반환
    return Response(videoID_list)