from rest_framework import serializers
from .models import Branch, Video

# image field 저장 위해 Hyperlinked 사용 -> 프론트에서 POST하는 경우에만 
class BranchSerializer(serializers.ModelSerializer): 
    # images = serializers.ImageField(use_url=True)
    # images = serializers.HyperlinkedIdentityField(view_name='yoga_page:branch-detail', read_only=True)
    class Meta:
        model = Branch
        fields = '__all__'
        # fields = ['name', 'description', 'images']

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'
