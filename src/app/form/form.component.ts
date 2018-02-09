import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,ReactiveFormsModule} from '@angular/forms';
import { User } from '../Details';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit 
{
  userForm=new FormGroup({userForm:new FormControl})
  
  FirstName: string;
  LastName: string;
  RollNumber : string;
  Branch : string;
  DOB: string;
  Year : string;
  Address : string;
  College : string;
  Email : string;
  Phone : number
  unamePattern = "^[a-zA-Z ]*$";
  lnamePattern = "^[a-zA-Z ]*$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  BranchPattern="^[a-zA-z ]{3}$";
  RollPattern="^[0-9]{5}[a-zA-Z]{1}[0-9]{4}$";
  collegePattern = "^[a-zA-Z_ ]*$";
  DOBPattern="^(1[0-2]|0?[1-9])/(3[01]|[12][0-9]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$";
  YearPattern="^201[4-8]$";
  PhonePattern= "^((\\+91-?)|0)?[0-9]{10}$";
  PhonePatterntwo="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$";
  AddressPattern="^[a-zA-Z0-9!@#$&()\\-`.+,/\" ]*$";
  
  
  UserDetails: Array<object>=[{FirstName: '',
  LastName: '',
  RollNumber : '',
  Branch : '',
  DOB: '',
  Year : '',
  Address : '',
  College : '',
  Email : '',
  Phone : ''}];
  constructor(private formBuilder:FormBuilder) 
  {
   
  }
  
  ngOnInit() {
    this.createForm();
  }
  
  createForm()
  {
    this.userForm=this.formBuilder.group({
      FirstName: new FormControl('', [Validators.required,Validators.minLength(5), Validators.pattern(this.unamePattern)]),
      LastName: new FormControl('', [Validators.required,Validators.minLength(5), Validators.pattern(this.lnamePattern)]),
      Branch:new FormControl('', [Validators.minLength(3), Validators.pattern(this.BranchPattern)]),
      Email: new FormControl('', [Validators.required,Validators.pattern(this.emailPattern)]),
      College: new FormControl('', [Validators.required,Validators.pattern(this.collegePattern)]),
      RollNumber:new FormControl( '', [Validators.required,Validators.pattern(this.RollPattern)]),
      DOB: new FormControl('', [Validators.pattern(this.DOBPattern)]),
      Year: new FormControl('', [Validators.pattern(this.YearPattern)]),
      Phone:new FormControl( '', [Validators.pattern(this.PhonePattern),Validators.pattern(this.PhonePatterntwo)]),
      Address:new FormControl( '', [Validators.pattern(this.AddressPattern)])
    });

    
    
  }
  
  
  
  onSubmit() {
    //this.isValidFormSubmitted = true;
    var data={FirstName: this.FirstName,
      LastName: this.LastName,
      RollNumber : this.RollNumber,
      Branch : this.Branch,
      DOB: this.DOB,
      Year: this.Year,
      Address : this.Address,
      College : this.College,
      Email : this.Email,
      Phone : this.Phone};
      this.UserDetails.push(data);
     
      console.log(this.userForm.value);
      
    }
    
    
  }
  
  
  