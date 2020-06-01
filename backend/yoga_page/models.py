from django.db import models
class Branch(models.Model):
    name = models.CharField(max_length=100)
    translation = models.CharField(max_length=100, default="")
    description = models.CharField(max_length=200)
    image = models.ImageField() 

    def __str__(self):
        return self.name

class Images(models.Model):
    branch = models.ForeignKey( Branch, related_name='branch_images', on_delete=models.CASCADE)
    images = models.ImageField(blank=True, upload_to="yoga_page") # save path: MEDIA_ROOT/yoga_page
    
    def __str__(self):
        return self.branch.name

class Video(models.Model):
    branch = models.ForeignKey(Branch, related_name='branch_videos', on_delete=models.CASCADE)
    video_id = models.CharField(max_length=100)
    level = models.IntegerField(null=True)
    runtime = models.IntegerField(null=True)
    
    def __str__(self):
        return self.branch.name

