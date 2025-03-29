import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutMeComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Подключаем маршруты
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
