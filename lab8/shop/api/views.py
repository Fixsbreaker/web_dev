from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category

def products_list(request):
    products = Product.objects.values()
    return JsonResponse(list(products), safe=False)

def get_product(request, id):
    product = get_object_or_404(Product, id=id)
    return JsonResponse(product.to_json(), safe=False)

def categories_list(request):
    categories = Category.objects.values()
    return JsonResponse(list(categories), safe=False)

def get_category(request, id):
    category = get_object_or_404(Category, id=id)
    return JsonResponse(category.to_json(), safe=False)

def get_products_by_category(request, id):
    category = get_object_or_404(Category, id=id)
    products = Product.objects.filter(category=category).values()
    return JsonResponse(list(products), safe=False)