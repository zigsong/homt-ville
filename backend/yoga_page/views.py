from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser # 추가 for Images
from .models import Branch, Images, Video
from .serializers import BranchSerializer, ImagesSerializer, VideoSerializer
from django.http import Http404
from django.http.response import JsonResponse
import requests
# POST는 서버(admin)으로만 진행
class BranchList(APIView):
    def post(self, request, format=None):
        serializer = BranchSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, format=None):
        queryset = Branch.objects.all()
        # serializer_context = {
        #     'request': request,
        # } # 추가
        serializer = BranchSerializer(queryset, many=True) # 다수의 branch 모델이 들어옴을 인식
        # context={'request': request}를 넣으면 return하는 images 필드의 값 앞에 로컬 포트 주소가 붙음 
        return Response(serializer.data)

class BranchDetail(APIView):
    def get_object(self, name): # request도 인자로?
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
 
    def patch(self, request, name): # 일부 수정 
        branch = self.get_object(name)
        serializer = BranchSerializer(branch, data=request.data, partial=True)
        # return self.partial_update(request, *args, **kwargs)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, name, format=None):
        branch = self.get_object(name)
        branch.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ImagesView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    # lookup_field = 'slug'
    # serializer_class = ImagesSerializer

    def get_object(self, name):
        try:
            return Images.objects.filter(branch=name)
        except Images.DoesNotExist:
            raise Http404

    def get(self, request, name):
        # image_set = self.get_object(name)
        image_set = Images.objects.filter(branch=name) # image_set 두 방법 모두 가능
        serializer = ImagesSerializer(image_set, many=True)
        return Response(serializer.data)
        # JsonResponse를 쓰고 인자로 'safe=False' 넣어줄 수 있음
    
    # post만 안 되는 중(admin으로 넣고 있음)
    def post(self, request, name, *args, **kwargs):
        branch = Branch.objects.get(name=name)
        images = request.FILES
        flag = 1
        arr = []
        

class VideoList(APIView):        

    def get_object(self, name):
        try:
            return Video.objects.filter(branch=name)
        except Video.DoesNotExist:
            raise Http404

    def fetchData(self, name):
        # YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?part=id/&q=%s&key=%s'
        branch = Branch.objects.get(name=name)
        searchkw = branch.translation
        API_KEY = 'AIzaSyBpu12_h2o-Rk8-W29YXJt4xyuA2UGJc3Q'
        response = requests.get(
            'https://www.googleapis.com/youtube/v3/search?part=id/&q=%s&key=%s'
            %(branch.translation, API_KEY)
        )
        videoData = response.json()
        return videoData

    def get(self, request, name, format=None): # name을 요가 이름으로 바꾸기
        queryset = self.fetchData(name)
        # serializer = VideoSerializer(queryset, many=True)
        # return Response(serializer.data)
        return queryset

    def post(self, request, name, *args, **kwargs):
        serializer = VideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
