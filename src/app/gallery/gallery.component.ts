

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
 
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  // Массив со свечами и их галереями
  candles = [
    { 
      name: 'Свадебные свечи', 
      image: '/assets/IMG_7426.jpeg',
      gallery: [
        '/assets/1B4AF20C-BE67-4D11-A024-38D6E5FF80C8.jpeg',
        '/assets/IMG_4694.jpeg',
        '/assets/IMG_7243.jpeg',
        '/assets/IMG_9999.jpeg',
        '/assets/IMG_7583.jpeg',
        '/assets/IMG_6922 (1).jpeg',
        '/assets/IMG_6908 (1).jpeg',
        '/assets/IMG_6905.jpeg',
        '/assets/IMG_6902.jpeg',
        '/assets/IMG_4705.jpeg',
        '/assets/IMG_7082 (1).jpeg',
        '/assets/IMG_7828.jpeg',
        '/assets/IMG_7830.jpeg'
      ]
    },
    { 
      name: 'День рождения', 
      image: '/assets/IMG_3444.jpeg',
      gallery: [
        '/assets/0DD8CEE5-AA03-4977-8E9B-3A39044678C3.jpeg',
        '/assets/IMG_2893.jpeg',
        '/assets/IMG_4532.jpeg',
        '/assets/IMG_1234.jpeg',
        '/assets/IMG_2772.jpeg',
        '/assets/IMG_3037.jpeg',
        '/assets/IMG_4328.jpeg',
        '/assets/IMG_3616.jpeg',
        '/assets/IMG_0930.jpeg'
      ]
    },
    { 
      name: 'Подарочные свечи', 
      image: '/assets/IMG_3089.jpeg',
      gallery: [
        '/assets/IMG_8380.jpeg',
        '/assets/IMG_6962.jpeg',
        '/assets/IMG_6955.jpeg',
        '/assets/IMG_5678.jpeg',
        '/assets/IMG_20250324_145941.jpg',
        '/assets/IMG_20250324_145922.jpg',
        '/assets/IMG_2292.jpeg',
        '/assets/IMG_1318.jpeg',
        '/assets/IMG_3152.jpeg',
        '/assets/IMG_3822.jpeg',
        '/assets/IMG_4206.jpeg',
        '/assets/IMG_4358.jpeg',
        '/assets/IMG_2761.jpeg',
        '/assets/IMG_2516.jpeg',
        '/assets/IMG_3028.jpeg',
        '/assets/IMG_3216.jpeg',
        '/assets/IMG_6669 (1).jpeg',
        '/assets/IMG_6670.jpeg',
        '/assets/IMG_6674.jpeg',
        '/assets/IMG_6676.jpeg',
        '/assets/IMG_4796.jpeg',
        '/assets/IMG_1272.jpeg',
        '/assets/IMG_7426.jpeg'
        

      ]
    },
    { 
      name: 'Венчальные свечи', 
      image: '/assets/IMG_1764.jpeg',
      gallery: [
        '/assets/IMG_1764.jpeg',
        '/assets/IMG_6951.jpeg',
        '/assets/IMG_8782.jpeg',
        '/assets/IMG_4444.jpeg',
        '/assets/IMG_0019.jpeg',
        '/assets/IMG_2389.jpeg'
      ]
    }
  ];

  isModalOpen = false; // Показывать ли модальное окно
  selectedGallery: string[] = []; // Хранит список изображений
  currentIndex: number = 0; // Индекс текущего изображения

  // Открытие модального окна и передача изображений
  openModal(images: string[]) {
    if (images && images.length > 0) {
      this.selectedGallery = images; // Сохраняем массив изображений
      this.currentIndex = 0; // Начинаем с первого фото
      this.isModalOpen = true;
    } else {
      console.warn('Галерея пуста!');
    }
  }

  // Закрытие модального окна
  closeModal() {
    this.isModalOpen = false;
  }

  // Переключение на следующее изображение
  nextImage() {
    if (this.currentIndex < this.selectedGallery.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Если достигнут конец, переход к первому изображению
    }
  }

  // Переключение на предыдущее изображение
  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.selectedGallery.length - 1; // Переход к последнему изображению
    }
  }
}