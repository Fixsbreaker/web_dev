import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent {
  products = [
    {
      name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
      description: 'Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. Вы будете чётко слышать весь спектр — от глубоких, насыщенных басов до кристально чистых высоких нот.',
      rating: '5/5',
      imageUrl: '/p1.jpg',
      productLink: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000'
    },
    {
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности. Удобные способы оставаться на связи. Более быстрый двухъядерный процессор для повышенной производительности. Apple Watch SE полны достоинств, а теперь это ещё более выгодная покупка, чем когда‑либо.\n' +
        '\n',
      rating: '5/5',
      imageUrl: '/p2.jpg',
      productLink: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'
    },
    {
      name: 'Смарт-часы Garmin Fenix 8 47 мм черный',
      description: 'Будьте безграничны. Серия мультиспортивных смарт-часов с GPS fenix 8 создана для серьезных спортсменов и любителей активного отдыха, которые хотят выйти за пределы своих возможностей. Новый fēnix 8 теперь поставляется либо с ярким AMOLED-дисплеем, либо с постоянно включенным дисплеем, заряжаемым от солнечной батареи, что увеличивает время автономной работы.',
      rating: '5/5',
      imageUrl: '/p3.jpeg',
      productLink: 'https://kaspi.kz/shop/p/garmin-fenix-8-47-mm-chernyi-122963617/?c=750000000'
    },
    {
      name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
      description: 'Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность.',
      rating: '5/5',
      imageUrl: '/p4.jpg',
      productLink: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000'
    },
    {
      name: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      description: 'Этот смартфон сочетает в себе стильный дизайн, мощную производительность и инновационные функции, чтобы удовлетворить все ваши потребности.',
      rating: '4.7/5',
      imageUrl: '/p5.jpg',
      productLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
      rating: '5/5',
      imageUrl: '/p6.jpg',
      productLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      name: 'Чехол JS0000084 серебристый',
      description: 'Этот элегантный аксессуар не только эффективно защищает от повреждений, но и придает вашему устройству современный и изысканный стиль.',
      rating: '5/5',
      imageUrl: '/p10.jpg',
      productLink: 'https://kaspi.kz/shop/p/js0000084-serebristyi-110564899/?c=750000000'
    },
    {
      name: 'Чехол Для Apple iPhone 11 прозрачный',
      description: 'Легкий, но при этом максимально- надежный чехол для Apple iPhone 11. Усиленные углы чехла - снижают силу удара на 30%. Полная защита камеры и выступающие над поверхностью экрана бортики - создают дополнительную защиту для экрана и камеры телефона.',
      rating: '5/5',
      imageUrl: '/p7.jpg',
      productLink: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000'
    },
    {
      name: 'SL-CX07 черный',
      description: 'Кулер для телефона - это не просто аксессуар, это инновационное решение для всех, кто ценит стабильность и производительность своего смартфона',
      rating: '4.8/5',
      imageUrl: '/p8.jpg',
      productLink: 'https://kaspi.kz/shop/p/sl-cx07-chernyi-117498170/?c=750000000'
    },
    {
      name: 'Кабель Apple Lightning (M), USB TypeC (M) белый',
      description: 'Кабель Apple USB Type-C - Lightning длиной 1 м удобен для подключения iPhone, iPad или iPod с разъёмом Lightning к устройствам с портом USB Type-C или Thunderbolt 3 для синхронизации и подзарядки.',
      rating: '4.9/5',
      imageUrl: '/p9.jpeg',
      productLink: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000'
    }
  ];


  shareProduct(productLink: string): void {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(productLink)}`;
    window.open(telegramUrl, '_blank');
  }
}
