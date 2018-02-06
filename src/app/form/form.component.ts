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
  RollPattern="^[0-9]{5}$";
  isValidFormSubmitted = null;
  
  userForm = this.formBuilder.group({
    FirstName: ['', [Validators.required,Validators.minLength(5), Validators.pattern(this.unamePattern)]],
    LastName: ['', [Validators.required,Validators.minLength(5), Validators.pattern(this.lnamePattern)]],
     Branch:['', [Validators.minLength(3), Validators.pattern(this.BranchPattern)]],
    Email: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
    RollNumber: ['', [Validators.required,Validators.pattern(this.RollPattern)]],
  });
  
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit() {
  }
  
  
  
  
  onSubmit() {
    this.isValidFormSubmitted = false;
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
  
  get Email() {
    return this.userForm.get('Email');
  }      
}
