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
    def get(self, request, format=None):
        posts      = Post.objects.all().order_by('-id')
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    
    def options(self, request, format=None):
        post        = Post.objects.all().filter(id=request.data["postId"])
        serializer  = PostSerializer(post, many=True)
        return Response(serializer.data)
    
    def put(self, request, format=None):
        if Post.objects.all().filter(id=request.data["postId"]).exists():
            like_obj        = Post.objects.get(id = request.data["postId"])
            like_obj.likes  = like_obj.likes+1
            like_obj.save()
            return Response({"response":"exists"})
        else:
            return Response({"response":"does not exists"})

    def post(self, request, format=None):
        try:
            final = Post(title=request.data["title"],author_name=request.data["author_name"],author_detail=request.data["author_detail"],content=request.data["content"],image=request.data["image"],category=Category.objects.get(category_name=request.data["category"]),sub_category=Sub_Category.objects.get(sub_category_name=request.data["sub_category"]))
            final.save()
        except:
            final = Post(title=request.data["title"],author_name=request.data["author_name"],author_detail=request.data["author_detail"],content=request.data["content"],category=Category.objects.get(category_name=request.data["category"]),sub_category=Sub_Category.objects.get(sub_category_name=request.data["sub_category"]))
            final.save()
        return Response(status.HTTP_201_CREATED)


class CategorySubCategory(APIView):
    def get(self, request, format=None):
        categories                      = Category.objects.all().order_by('-id')
        categories_serializer           = CategorySerializer(categories, many=True)
        return Response(categories_serializer.data)