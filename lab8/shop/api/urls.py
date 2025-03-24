from django.urls import path
from django.urls.conf import re_path

from .views import *


urlpatterns = [
    path('api/products/', products_list),
    path('api/products/<int:id>/', get_product),
    path('api/categories/', categories_list),
    path('api/categories/<int:id>/', get_category),
    path('api/categories/<int:id>/products/', get_products_by_category)
]