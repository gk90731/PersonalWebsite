from django.shortcuts               import render
from rest_framework.views           import APIView
from rest_framework.decorators      import api_view,authentication_classes,permission_classes,parser_classes
from rest_framework.parsers         import MultiPartParser, FormParser, JSONParser, FileUploadParser 
from rest_framework.response        import Response
from rest_framework                 import status
from rest_framework.permissions     import IsAuthenticated
from django.utils.functional        import SimpleLazyObject
from django.http                    import JsonResponse,HttpResponse
from django.views.decorators.csrf   import csrf_exempt


from . models       import Category, Sub_Category, Post
from . serializers  import PostSerializer, CategorySerializer, Sub_CategorySerializer


class PostsView(APIView):
    # permission_classes = (IsAuthenticated,)
    def get(self, request, format=None):
        posts      = Post.objects.all().order_by('-id')
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    
    def options(self, request, format=None):
        post = Post.objects.all().filter(id=request.data["postId"])
        serializer = PostSerializer(post, many=True)
        return Response(serializer.data)
    
    def put(self, request, format=None):
        if Post.objects.all().filter(id=request.data["postId"]).exists():
            like_obj = Post.objects.get(id = request.data["postId"])
            like_obj.likes = like_obj.likes+1
            like_obj.save()
            return Response({"response":"exists"})
        else:
            return Response({"response":"does not exists"})


class CategorySubCategory(APIView):
    def get(self, request, format=None):
        categories                      = Category.objects.all().order_by('-id')
        sub_categories                  = Sub_Category.objects.all().order_by('-id')
        categories_serializer           = CategorySerializer(categories, many=True)
        sub_categories_serializer       = Sub_CategorySerializer(sub_categories, many=True)
        return Response({"categories":categories_serializer.data,"sub_categories":sub_categories_serializer.data})