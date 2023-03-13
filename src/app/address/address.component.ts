import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { zipcodeValidator } from '../validator';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  form!: FormGroup;
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
  pinCode: [null,  Validators.required,
        Validators.minLength(6),Validators.pattern("^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$")],
        //  url: "https://api.postalpincode.in/pincode/",
        // regex = "^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$";        
        zip: ['', zipcodeValidator],

    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Andhra Pradesh', abbreviation: 'Ap'},
    {name: 'Arunachal Pradesh', abbreviation: 'Arp'},
    {name: 'Assam ', abbreviation: 'AS'},
    {name: 'Bihar', abbreviation: 'B'},
    {name: 'Chhattisgarh', abbreviation: 'CH'},
    {name: 'Goa', abbreviation: 'GO'},
    {name: 'Gujarat', abbreviation: 'G'},
    {name: 'Haryana', abbreviation: 'H'},
    {name: 'Himachal Pradesh', abbreviation: 'HP'},
    {name: 'Djammu and Kashmir', abbreviation: 'GK'},
    {name: 'Jharkhand', abbreviation: 'JH'},
    {name: 'Karnataka', abbreviation: 'KR'},
    {name: 'Kerala', abbreviation: 'GA'},
    {name: 'Madhya Pradesh', abbreviation: 'P'},
    {name: 'Maharashtra', abbreviation: 'MAH'},
    {name: 'Manipur', abbreviation: 'MN'},
    {name: 'Meghalaya', abbreviation: 'MG'},
    {name: 'Mizoram', abbreviation: 'MI'},
    {name: 'Nagaland', abbreviation: 'NG'},
    {name: 'Odisha', abbreviation: 'OD'},
    {name: 'Punjab', abbreviation: 'P'},
    {name: 'Rajasthan', abbreviation: 'RAJ'},
    {name: 'Sikkim', abbreviation: 'SK'},
    {name: 'Tamil Nadu', abbreviation: 'TN'},
    {name: 'Telangana', abbreviation: 'TE'},
    {name: 'Tripura', abbreviation: 'T'},
    {name: 'Uttar Pradesh', abbreviation: 'UP'},
    {name: 'West Bengal', abbreviation: 'WB'},
  ];


  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log (this.addressForm.value)
    if(this.addressForm.status=='VALID')
    //call api and submit for data
    alert('Thanks!');
  }

}
