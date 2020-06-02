from rest_framework import serializers
from .models import Branch, Image, Video
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'
        # fields = ['images',]
        
class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'
        # fields = ['video_id', 'level', 'runtime',]

class BranchSerializer(serializers.ModelSerializer): 
    images = ImageSerializer(many=True)
    videos = VideoSerializer(many=True)
    # SlugRelatedField도 가능하지만 2개의 foriegn key를 매칭하기 어려움
    # images = serializers.PrimaryKeyRelatedField(many=True, queryset=Image.objects)
    # videos = serializers.PrimaryKeyRelatedField(many=True, queryset=Video.objects)

    class Meta:
        model = Branch
        fields = ['name', 'translation', 'description', 'images', 'videos']
       

