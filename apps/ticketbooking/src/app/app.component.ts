import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { CoreService } from './core.service';
import { AddproductComponent } from './addproduct/addproduct.component';

@Component({
  selector: 'bookingapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticketbooking';
  isLogedIn = false;

  constructor(public dialog: MatDialog, public coreService: CoreService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
      data: { name: 'admin', password: 'admin@123' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result === 'login' ? this.isLogedIn = true : this.isLogedIn = false;
      this.coreService.setLoginStatus(this.isLogedIn);
    });
  }
  logOut() {
    this.isLogedIn = false;
  }
  addNewProduct() {
    const dialogRef = this.dialog.open(AddproductComponent, {
      width: '250px',
      data: []
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result === 'cancel') {
        return;
      }
      this.coreService.sendMessage(result);
    });
  }
}
