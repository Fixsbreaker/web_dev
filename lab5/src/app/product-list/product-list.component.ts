import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent,],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() products: any[] = [];
  @Input() categoryId: number | null = null;
  @Output() removeProduct = new EventEmitter<{ categoryId: number, productId: number }>();

  onRemoveProduct(productId: number) {
    if (this.categoryId !== null) {
      this.removeProduct.emit({ categoryId: this.categoryId, productId });
    }
  }

  onLikeProduct(product: any) {
    product.likes++;
  }
}
