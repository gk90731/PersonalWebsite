from django.urls import path,include
from           . import views
urlpatterns = [
    path('post/',views.PostsView.as_view(),name='post'),
    path('postCategory/',views.CategorySubCategory.as_view(),name='postCategory')
]