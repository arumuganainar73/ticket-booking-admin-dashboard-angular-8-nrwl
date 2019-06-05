import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'bookingapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticketbooking';
  isLogedIn = false;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
      data: { name: 'admin', password: 'admin@123' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result === 'login' ? this.isLogedIn = true : this.isLogedIn = false;

    });
  }
  logOut() {
    this.isLogedIn = false;
  }
}
