import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {
  myForm:FormGroup;
  details: Array<object> =[];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50),Validators.pattern('^([^0-9]*)$')]],
      lname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50),Validators.pattern('^([^0-9]*)$')]],
      branch:['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      rollno:['', [Validators.required,Validators.pattern('^[0-9]{5}[A-Z]{1}[0-9]{4}$')]],
      Dob:['', [Validators.required]] ,    
      college:['', [Validators.required]],
    place:['', [Validators.required]],
    phonenumber:['', [Validators.required,Validators.pattern('^[0-9]{10}$')]],
    phoneno:['', [Validators.required,Validators.pattern('^[0-9]{10}$')]],
    YOP:['', [Validators.required]],


    }); 
  }
  onSubmit(){ 
    this.details.push(this.myForm.value);
}
}   