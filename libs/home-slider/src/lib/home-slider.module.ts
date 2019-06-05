import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { RouterModule } from '@angular/router';
import { SlideshowModule } from 'ng-simple-slideshow';
import { MaterialModule } from './app-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule,
    SlideshowModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeSliderComponent }
    ])],
  declarations: [HomeSliderComponent],
  exports: [HomeSliderComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeSliderModule { }
