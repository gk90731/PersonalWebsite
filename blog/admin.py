from django.contrib import admin
from . models import Category, Sub_Category, Post, Skills_Category, Skills_Name, PostComments, PostComments_Reply
from import_export.admin import ImportExportModelAdmin
# Register your models here.

@admin.register(Post)
class PostAdmin(ImportExportModelAdmin):
    pass

@admin.register(Skills_Name)
class Skills_NameAdmin(ImportExportModelAdmin):
    pass

@admin.register(Skills_Category)
class Skills_CategoryAdmin(ImportExportModelAdmin):
    pass

@admin.register(Sub_Category)
class Sub_CategoryAdmin(ImportExportModelAdmin):
    pass

@admin.register(Category)
class CategoryAdmin(ImportExportModelAdmin):
    pass

@admin.register(PostComments)
class PostCommentsAdmin(ImportExportModelAdmin):
    pass

@admin.register(PostComments_Reply)
class PostComments_ReplyAdmin(ImportExportModelAdmin):
    pass