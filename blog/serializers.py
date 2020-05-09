from rest_framework import serializers

from . models import Category, Sub_Category, Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Post
        fields = '__all__'
        depth  = 1


class Sub_CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model  = Sub_Category
        fields = ('sub_category_name',)

class CategorySerializer(serializers.ModelSerializer):
    sub_category_set = Sub_CategorySerializer(many=True)
    class Meta:
        model  = Category
        fields = ('category_name', 'sub_category_set')
