import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';


@Component({
  selector: 'app-root',
  imports: [ProductsComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lab4';
}
