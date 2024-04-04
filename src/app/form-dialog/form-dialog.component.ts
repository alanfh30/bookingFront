import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookingServiceService } from 'src/services/booking-service.service';

export interface ReservationModel {
  name?: string;
  tableSize?:number;
  dateAndHour?:Date;
}


@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {
  
  reservation:ReservationModel= {
    name: '',
    tableSize:0,
    dateAndHour: undefined
  };

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
  ) {}


  ngOnInit(): void {
  }

}
