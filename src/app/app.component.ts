import { Component, Inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { BookingServiceService } from 'src/services/booking-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookingApp';
  reservations:Array<any> = []; 
  displayedColumns: string[] = ['name', 'tableSize', 'date'];
  dataSource: any;

  constructor(public dialog: MatDialog, private bookingService:BookingServiceService
    ){
    
  }

  openCustomer(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.bookingService.addNewBooking(result);

      this.bookingService.getBookings().subscribe(data => this.dataSource = data)
    });
  }
}


