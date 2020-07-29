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


class ImageQuerySet(models.QuerySet):

    def delete(self, *args, **kwargs):
        for obj in self:
            obj.image.delete()
        super(ImageQuerySet, self).delete(*args, **kwargs)


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

class PostComments(models.Model):
    Post             =     models.ForeignKey(Post, on_delete=models.CASCADE)
    comment          =     models.TextField()
    def __str__(self):
        return f"{self.Post}"

class PostComments_Reply(models.Model):
    comment          =     models.ForeignKey(PostComments, on_delete=models.CASCADE)
    reply            =     models.TextField()
    def __str__(self):
        return f"{self.comment}"

class Skills_Category(models.Model):
    category_name            =     models.CharField(max_length=100)
    def __str__(self):
        return f"{self.category_name}"

class Skills_Name(models.Model):
    category                 =     models.ForeignKey(Skills_Category,on_delete=models.CASCADE)
    skills_name              =     models.CharField(max_length=400)
    efficiency_percent       =     models.IntegerField()
    def __str__(self):
        return f"{self.skills_name}"
