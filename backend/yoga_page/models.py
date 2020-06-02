from django.db import models
from django.utils import timezone # 장고는 created_at과 updated_at을 알아서 만들어 주지 않음. id는 만들어 줌

class Branch(models.Model):
    name = models.CharField(max_length=100, default="")
    translation = models.CharField(max_length=100, default="")
    description = models.CharField(max_length=200, default="")

    def __str__(self):
        return self.name

class Image(models.Model):
    branch = models.ForeignKey(Branch, related_name='branch_images', on_delete=models.CASCADE)
    image = models.ImageField(blank=True, upload_to="yoga_page") # save path: MEDIA_ROOT/yoga_page
    
    def __str__(self):
        return self.branch.name

class Video(models.Model):
    branch = models.ForeignKey(Branch, related_name='branch_videos', on_delete=models.CASCADE)
    url = models.CharField(max_length=100, default="")
    level = models.IntegerField(null=True)  
    runtime = models.IntegerField(null=True)
    
    def __str__(self):
        return self.branch.name

