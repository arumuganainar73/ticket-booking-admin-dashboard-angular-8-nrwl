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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeSliderModule,
    ProductListsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [CoreService],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
