import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { BannersComponent } from './banners/banners.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';
import { FrontComponent } from './front/front.component';
import { ArticleComponent } from './article/article.component';
import { GalleryComponent } from './gallery/gallery.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    BannersComponent,
    FooterComponent,
    ArticlesComponent,
    FrontComponent,
    ArticleComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: FrontComponent}
      , { path: 'Articles/:id', component: ArticleComponent}
      , { path: 'Articles', component: ArticlesComponent}
      , { path: 'About', component: AboutComponent}
      , { path: '**', component: FrontComponent} // change this to 404
    ]),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
