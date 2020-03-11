from django.db import models
class Branch(models.Model):
    name = models.CharField(max_length=100)
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
    images = models.ImageField(verbose_name='image')
    
    def __str__(self):
        return self.branch.name

class Video(models.Model):
    branch = models.ForeignKey(Branch, related_name='branch_videos', on_delete=models.CASCADE, default=None)
    url = models.CharField(max_length=100)
    level = models.CharField(max_length=10)
    runtime = models.IntegerField()
    
    def __str__(self):
        return self.branch

