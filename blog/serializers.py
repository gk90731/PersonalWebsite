from rest_framework import serializers

from . models import Category, Sub_Category, Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Post
        fields = '__all__'
        depth  = 1

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model  = Category
        fields = '__all__'

class Sub_CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model  = Sub_Category
        fields = '__all__'