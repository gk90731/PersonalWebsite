from django.db import models

# Create your models here.

class Category(models.Model):
    category_name            =     models.CharField(max_length=100)
    def __str__(self):
        return f"{self.category_name}"

class Sub_Category(models.Model):
    Category                 =     models.ForeignKey(Category,on_delete=models.CASCADE)
    sub_category_name        =     models.CharField(max_length=400)
    def __str__(self):
        return f"{self.sub_category_name}"

class Post(models.Model):
    title            =     models.CharField(max_length=100)
    author_name      =     models.CharField(max_length=100)
    author_detail    =     models.CharField(max_length=100)
    content          =     models.TextField()
    image            =     models.ImageField(upload_to='post_images',blank=True,null=True)
    category         =     models.ForeignKey(Category,on_delete=models.CASCADE)
    sub_category     =     models.ForeignKey(Sub_Category,on_delete=models.CASCADE)
    likes            =     models.IntegerField(blank=True,null=True,default=0)
    def __str__(self):
        return f"{self.title}"