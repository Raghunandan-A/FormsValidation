import { Component } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormArray, FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { PatternValidator } from '@angular/forms';
import { EMAIL_VALIDATOR } from '@angular/forms/src/directives/validators';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  firstname:string="";
  lastname:string="";
  rollno:string="";
  branch:string="";
  dob:string="";
  yop:string="";
  place:string="";
  college:string="";
  mail:string="";
  phone:string="";
  contact: Array<Object>=[{firstname:'',lastname:'',rollno:'',branch:'',dob:'',yop:'',place:'',college:'',mail:'',phone:''}];
  complexForm =new FormGroup({
    complexForm:new FormControl
  })
  
    constructor(private fb: FormBuilder){
      this.complexForm = this.fb.group({
        'firstname':new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        'lastname':new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        'place':new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        'college':new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        'rollno':new FormControl("",[Validators.pattern("[0-9]{5}[a-z|A-Z]{1}[0-9]{4}")]),
        'branch':new FormControl("",[Validators.required]),
        'dob':new FormControl("",[Validators.pattern("[0-9]{2}/[0-9]{2}/[0-9]{4}")]),
        'yop':new FormControl("",[Validators.min(2014),Validators.max(2018),Validators.minLength(4),Validators.maxLength(4)]),
        'mail': new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
        'phone':new FormControl("",[Validators.required,Validators.minLength(16),Validators.maxLength(16),Validators.pattern("[+|0-9]{3}[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}")])
      })  
}
  submit()
  {
    var a={firstname:this.firstname,
      lastname:this.lastname,
      rollno:this.rollno,
      branch:this.branch,
      dob:this.dob,
      yop:this.yop,
      place:this.place,
      college:this.college,
      mail:this.mail,
      phone:this.phone
    };

    
    if(this.lastname!="" && this.firstname!="" && this.branch!="" && this.dob!="" && this.yop!="" && this.rollno!="" && this.place!="" && this.college!="" && this.mail!="" && this.phone!="")
    {
    this.contact.push(a);
    }
  }
}
