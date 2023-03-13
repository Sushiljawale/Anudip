import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  pinUrl: string;
  pincode!: string;
  constructor(private http: HttpClient) {
    this.pinUrl =  //'https://jsonplaceholder.typicode.com/users'; //  
    "https://api.postalpincode.in/pincode/431513";
  }

 

}
