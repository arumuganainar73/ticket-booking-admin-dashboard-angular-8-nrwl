import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeSliderModule } from 'libs/home-slider/src/lib/home-slider.module';
import { ProductListsModule } from 'libs/product-lists/src/lib/product-lists.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreService } from './core.service';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [AppComponent, LoginComponent, AddproductComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeSliderModule,
    ProductListsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [CoreService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  entryComponents: [LoginComponent, AddproductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
