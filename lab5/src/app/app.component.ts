import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories = [
    { id: 1, name: 'Electronics', products: [
      { id: 1, name: 'Смартфон Apple iPhone 13 128Gb черный', imageUrl: '1.jpg', description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.', likes: 0 },
      { id: 2, name: 'Чехол NRS1708 розовый', imageUrl: '2.jpg', description: 'Чехлы для зарядных устройств и кабелей.', likes: 0 },
      { id: 3, name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный', imageUrl: '3.jpg', description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой.', likes: 0 },
      { id: 4, name: 'Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый', imageUrl: '4t.jpg', description: 'Быстро заряжает устройства, сокращая время ожидания.', likes: 0 },
      { id: 5, name: 'Кабель USB TypeC (M), Lightning белый', imageUrl: '5.jpg', description: 'Кабель Apple USB Type-C - Lightning длиной 1 м удобен для подключения iPhone, iPad или iPod с разъёмом Lightning к устройствам с портом USB Type-C', likes: 0 }
    ]},
    { id: 2, name: 'Furniture', products: [
      { id: 1, name: 'Morbido диван прямой Комфорт', imageUrl: '6.jpg', description: 'Практичный  диван-кровать с легкой системой трансформации. Каркас изготовлен из ДСП, деревянный брус. Мягкие элементы выполнены из пенополиуретана', likes: 0 },
      { id: 2, name: 'Вешалка напольная, izox, металл, 110x150 см, черный', imageUrl: '7.jpg', description: 'Напольная металлическая вешалка представляет собой прочную и надёжную конструкцию, способную выдерживать значительный вес одежды. ', likes: 0 },
      { id: 3, name: 'Стул Чили, 86x45x37 см, обивка серый велюр', imageUrl: '8.jpg', description: 'Oбивка серый велюр, Страна Россия', likes: 0 },
      { id: 4, name: 'Диван прямой Nasip Raiana, обивка ткань, 85х230х70 см, светло-коричневый', imageUrl: '9.jpg', description: 'Практичный раскладной диван, компактный и простой в уходе. ППУ (пенополиуретан) — это сверхлегкий пластичный материал, получаемый из синтетических полимеров.', likes: 0 },
      { id: 5, name: 'ТВ-тумба напольная Modern New Design TT, 180x40x35 см, белый, коричневый', imageUrl: '10.jpg', description: 'белый, коричневый. Страна Казахстан. ', likes: 0 }]
    },
    { id: 3, name: 'Books', products:  [
      { id: 1, name: 'Книга Керімбай С., Нәби Ә.: Қаныш және Ғылыми майдан', imageUrl: '11.jpg', description: 'Керімбай С., Нәби Ә.: Қаныш және Ғылыми майдан — бұл кітап ұлы ғалым Қаныш Сәтбаевтың өмірі мен ғылыми қызметіне арналады.', likes: 0 },
      { id: 2, name: 'Книга Клир Д.: Атомные привычки', imageUrl: '12.jpg', description: 'Бұл кітапта XXI ғасырдың ең үлкен проблемасына айналған экзистенциялық фрустрацияның қазақ қоғамындағы пайда болуы мен таралу себептеріне экзистенциялық анализ жасалады.', likes: 0 },
      { id: 3, name: 'Книга Санжар Керімбай, Әділбек Нәби: Қуыскеуде', imageUrl: '13.jpg', description: 'Бұл кітапта XXI ғасырдың ең үлкен проблемасына айналған экзистенциялық фрустрацияның қазақ қоғамындағы пайда болуы мен таралу себептеріне экзистенциялық анализ жасалады', likes: 0 },
      { id: 4, name: 'Книга Дамира Өмірзаққызы Ибрагим: Адамзаттың асыл тәжі', imageUrl: '14.jpg', description: 'Книга Дамира Өмірзаққызы Ибрагим "Адамзаттың асыл тәжі" посвящена жизни и деятельности Пророка Мухаммеда (мир ему и благословение) и его великому вкладу в развитие человечества. ', likes: 0 },
      { id: 5, name: 'Книга Набор обучающих книг на казахском языке', imageUrl: '15.jpg', description: 'Добро пожаловать в мир увлекательного обучения с набором обучающих книг на казахском языке! Этот набор включает в себя 4 книги, специально разработанные для детей от 3 лет. ', likes: 0 }]
    },
    { id: 4, name: 'Home&Kitchen', products:  [
      { id: 1, name: 'Диффузор Eyfel Манго 55 мл', imageUrl: '16.jpg', description: 'Незабываемый аромат манго наполнит ваше помещение яркими эмоциями и ощущением настоящего отпуска у моря в жаркой тропической стране.', likes: 0 },
      { id: 2, name: 'Хозяйственная свеча 236036 17 см, 3 шт', imageUrl: '17.jpg', description: 'Хозяйственная свеча', likes: 0 },
      { id: 3, name: 'Зеркало 365176 60x60 см, настенное', imageUrl: '18.jpg', description: 'для ванной, для спальни, для гостиной', likes: 0 },
      { id: 4, name: 'Часы кварцевые Quartz 581144742, пластик', imageUrl: '19.jpg', description: 'Форма круглая, Механизм часов - кварцевые.', likes: 0 },
      { id: 5, name: 'MIRROR зеркало 311W 40x156 см, напольное', imageUrl: '20.jpg', description: 'Практичное зеркало напольное на колесиках подойдет для установки как в залах небольших бутиков, так и огромных торговых площадей. ', likes: 0 }]
    }
  ];

  selectedCategoryId: number | null = null;
  selectedCategoryProducts: any[] = [];

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    const category = this.categories.find(c => c.id === id);
    if (category) {
      this.selectedCategoryProducts = category.products;
    } else {
      this.selectedCategoryProducts = [];
    }
  }

  removeProduct(event: { categoryId: number, productId: number }) {
    const category = this.categories.find(c => c.id === event.categoryId);
    if (category) {
      category.products = category.products.filter(p => p.id !== event.productId);
      this.selectCategory(this.selectedCategoryId!);
    }
  }

}
