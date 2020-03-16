from django.db import models
class Branch(models.Model):
    name = models.CharField(max_length=100, unique=True, primary_key=True)
    translation = models.CharField(max_length=100, default="")
    description = models.CharField(max_length=200)
    image = models.ImageField() # upload_to="yoga_image" (prefix to image url)
    # branch_images = models.ManyToManyField(Images, related_name='branch_images')

    def __str__(self):
        return self.name

# def get_image_filename(instance, filename):
#     id = instance.post.id
#     return "post_images/%s" % (id)  

class Images(models.Model):
    branch = models.ForeignKey(Branch, related_name='branch_images', on_delete=models.CASCADE, default=None)
    images = models.ImageField(verbose_name='image', upload_to="yoga_images/") # 어차피 media로 올라가서 upload_to가 안 먹히는 듯 
    
    def __str__(self):
        return self.branch.name

class Video(models.Model):
    branch = models.ForeignKey(Branch, related_name='branch_videos', on_delete=models.CASCADE, default=None)
    video_id = models.CharField(max_length=100)
    level = models.CharField(max_length=10, null=True)
    runtime = models.IntegerField(null=True)
    
    def __str__(self):
        return self.branch.name

