import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { MaterialModule } from './app-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SlideshowModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ProductListsComponent }
    ])
  ],
  declarations: [ProductListsComponent],
  exports: [ProductListsComponent],
})
export class ProductListsModule { }
