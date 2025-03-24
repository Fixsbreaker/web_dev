from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            "category name": self.name,
        }

class Product(models.Model):
    name = models.CharField(max_length=255, null=True)
    price = models.FloatField(null=True)
    description = models.TextField(null=True)
    count = models.IntegerField(null=True)
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category,
                                 on_delete=models.CASCADE,
                                 related_name="products",
                                 default=1)

    def __str__(self):
        return f"{self.name} - {self.price}"

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "description": self.description,
            "count": self.count,
            "is_active": self.is_active
        }





