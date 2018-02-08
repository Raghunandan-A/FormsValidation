import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../Details';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  unamePattern = "^[a-zA-Z]{5,10}$";
  lnamePattern = "^[a-zA-Z]{8,15}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  BranchPattern="^[a-zA-z]{3}$";
  RollPattern="^[0-9]{5}[a-zA-Z]{1}[0-9]{4}$";
  collegePattern = "^[a-zA-Z]$";
  DOBPattern="^(1[0-2]|0?[1-9])/(3[01]|[12][0-9]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$";
  YearPattern="^201[4-8]$";
  PhonePattern= "^((\\+91-?)|0)?[0-9]{10}$";
  AddressPattern="^[a-zA-Z0-9]{2}$";
  isValidFormSubmitted = null;
  
  userForm = this.formBuilder.group({
    FirstName: ['', [Validators.required,Validators.minLength(5), Validators.pattern(this.unamePattern)]],
    LastName: ['', [Validators.required,Validators.minLength(5), Validators.pattern(this.lnamePattern)]],
     Branch:['', [Validators.minLength(3), Validators.pattern(this.BranchPattern)]],
    Email: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
    College: ['', [Validators.required,Validators.pattern(this.collegePattern)]],
    RollNumber: ['', [Validators.required,Validators.pattern(this.RollPattern)]],
    DOB: ['', [Validators.pattern(this.DOBPattern)]],
    Year: ['', [Validators.pattern(this.YearPattern)]],
    Phone: ['', [Validators.pattern(this.PhonePattern)]],
    Address: ['', [Validators.pattern(this.AddressPattern)]],
  });
  UserDetails:Array<object>=[{FirstName: '',
    LastName: '',
    RollNumber : '',
    Branch : '',
    DOB: '',
    Year : '',
    Address : '',
    College : '',
    Email : '',
    Phone : ''}];
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit() {
  }
  
  
  
  
  onSubmit() {
    this.isValidFormSubmitted = false;
    var data={FirstName: this.FirstName,
      LastName: this.LastName,
      RollNumber : this.RollNumber,
      Branch : this.Branch,
      DOB: this.DOB,
      Year: this.Year,
      Address : this.Address,
      College : this.College,
      Email : this.Email,
      Phone : this.Phone}
      this.UserDetails.push(data);
    if (this.userForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    let user: User = this.userForm.value;
    this.userForm.reset();
  }
  get FirstName() {
    return this.userForm.get('FirstName');
  }
  
  get LastName() {
    return this.userForm.get('LastName');
  }
  get Branch() {
    return this.userForm.get('Branch');
  }
  get RollNumber() {
    return this.userForm.get('RollNumber');
  }
  get DOB()
  {
    return this.userForm.get('DOB');
  }
  get Year()
  {
    return this.userForm.get('Year');
  }
  get Address()
  {
    return this.userForm.get('Address');
  }

  get Phone()
  {
    return this.userForm.get('Phone');
  }
  get College() {
    return this.userForm.get('College');
  }    
  get Email() {
    return this.userForm.get('Email');
  }      
}
