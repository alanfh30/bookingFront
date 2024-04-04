import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  uri:string = 'http://localhost:8080/'
  constructor(private http: HttpClient) { }

  addNewBooking(booking:any){
    return this.http.post(this.uri+'save', booking)
    }


    getBookings(){
      return this.http.get(this.uri+'booking');
    }

}
