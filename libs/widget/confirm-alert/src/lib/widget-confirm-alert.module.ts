import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmAlertComponent } from './confirm-alert/confirm-alert.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ConfirmAlertComponent],
  exports: [ConfirmAlertComponent],

})
export class WidgetConfirmAlertModule { }
