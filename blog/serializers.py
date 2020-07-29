from rest_framework import serializers

from . models import Category, Sub_Category, Post, Skills_Category, Skills_Name, PostComments, PostComments_Reply


class Comment_ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComments_Reply
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    reply = serializers.SerializerMethodField()
    def get_reply(self, obj):
        return Comment_ReplySerializer(PostComments_Reply.objects.all(), many=True, context=self.context).data
    class Meta:
        model = PostComments
        fields = ('comment', 'reply')

class PostSerializer(serializers.ModelSerializer):
    total_comments = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()
    def get_total_comments(self, obj):
        return PostComments.objects.all().count() + PostComments_Reply.objects.all().count()
    def get_comments(self, obj):
        return CommentSerializer(PostComments.objects.all(), many=True, context=self.context).data
    class Meta:
        model  = Post
        fields = ('title', 'author_name', 'author_detail', 'content', 'image', 'category', 'sub_category', 'likes', 'total_comments', 'comments')
        depth  = 2


class Sub_CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model  = Sub_Category
        fields = ('sub_category_name',)

class CategorySerializer(serializers.ModelSerializer):
    sub_category_set = Sub_CategorySerializer(many=True)
    class Meta:
        model  = Category
        fields = ('category_name', 'sub_category_set')

class Skills_NameSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Skills_Name
        fields = ('skills_name', 'efficiency_percent')

class Skills_CategorySerializer(serializers.ModelSerializer):
    skills_name_set = Skills_NameSerializer(many=True)
    class Meta:
        model  = Category
        fields = ('category_name', 'skills_name_set')
