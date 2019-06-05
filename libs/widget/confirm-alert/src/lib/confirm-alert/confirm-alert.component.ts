import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'bookingapp-confirm-alert',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.scss']
})
export class ConfirmAlertComponent implements OnInit {

  title = '';
  content = '';
  constructor(
    public dialogRef: MatDialogRef<ConfirmAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title;
    this.content = data.content;
  }

  closePopup(flag) {
    this.dialogRef.close(flag);
  }


  ngOnInit() {
  }

}
