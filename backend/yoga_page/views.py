from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Branch, Video
from .serializers import BranchSerializer, VideoSerializer
from django.http import Http404

# POST는 서버(admin)으로만 진행

class BranchList(APIView):
    def post(self, request, format=None):
        serializer = BranchSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, format=None):
        # images = get(Branch, images=images) # 추가 
        queryset = Branch.objects.all()
        # serializer_context = {
        #     'requeust': request,
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

    def delete(self, request, name, format=None):
        branch = self.get_object(name)
        branch.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class VideoList(APIView):

    def post(self, request, format=None):
        serializer = VideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, name='ashtanga', format=None): # name을 요가 이름으로 바꾸기
        queryset = Video.objects.all()
        serializer = VideoSerializer(queryset, many=True)
        return Response(serializer.data)
