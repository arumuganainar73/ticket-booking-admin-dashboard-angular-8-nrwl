import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bookingapp-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddproductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  /*******************************************************
   * Close Popup
   * *****************************************************/

  closePopup(flag) {
    this.dialogRef.close(flag);
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      actor: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.productForm.controls; }

  /*******************************************************
   * add new product
   * *****************************************************/


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }

    const product = {
      title: this.productForm.controls.title.value,
      actor: this.productForm.controls.actor.value,
      price: this.productForm.controls.price.value,
      description: this.productForm.controls.description.value,
    }
    this.dialogRef.close(product);
  }
}
