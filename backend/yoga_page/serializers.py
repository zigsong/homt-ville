from rest_framework import serializers
from .models import Branch, Images, Video
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ['images',]
        
class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'

        fields = ['video_id', 'level', 'runtime',]

class BranchSerializer(serializers.ModelSerializer): 
    branch_images = ImageSerializer(many=True, read_only=True)
    branch_videos = VideoSerializer(many=True, read_only=True)
    class Meta:
        model = Branch
        fields = '__all__'
        # fields = ['name', 'translation', 'description', 'image', 'branch_images', 'branch_videos']
       

