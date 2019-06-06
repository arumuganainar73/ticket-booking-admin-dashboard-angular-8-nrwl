import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'bookingapp-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product = {
    title: '',
    actor: '',
    price: '',
    description: ''
  }
  constructor(
    public dialogRef: MatDialogRef<AddproductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  closePopup(flag) {
    flag === 'add' ? this.dialogRef.close(this.product) : this.dialogRef.close(flag);
  }

  ngOnInit() {
  }

}
