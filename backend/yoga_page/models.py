from django.db import models

class Branch(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    images = models.ImageField() # upload_to="yoga_image" (prefix to image url)

    def __str__(self):
        return self.name

class Video(models.Model):
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    url = models.CharField(max_length=100)
    level = models.CharField(max_length=10)
    runtime = models.IntegerField()
    
    def __str__(self):
        return self.branch

