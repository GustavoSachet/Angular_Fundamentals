import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './institutional/about/about.component';
import { ContactComponent } from './institutional/contact/contact.component';
import { DataBindingComponent } from './demo/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/services/products.service';
import { ProductsComponent } from './store/products/products.component';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DataBindingComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NavigationModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    ProductService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }