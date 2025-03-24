from django.contrib import admin

from .models import Product, Category


@admin.register(Product)

class ProductAdmin(admin.ModelAdmin):
    list_display=("id", "name", "price")
    search_fields=("id", "name", "price")

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass
