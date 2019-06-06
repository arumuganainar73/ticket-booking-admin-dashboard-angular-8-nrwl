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
  /*******************************************************
     * Login component
     * *****************************************************/

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
  /*******************************************************
   * ALogout
   * *****************************************************/
  logOut() {
    this.isLogedIn = false;
    this.coreService.setLoginStatus(this.isLogedIn);
  }
  /*******************************************************
   * Add new product popup
   * *****************************************************/

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
