import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Главная страница
    { path: 'about-me', component: AboutMeComponent }, // Обо мне
    { path: 'gallery', component: GalleryComponent } // Галерея
];
