import { Component } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { PatternValidator } from '@angular/forms';
import { EMAIL_VALIDATOR } from '@angular/forms/src/directives/validators';

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
        'mail': new FormControl("",[Validators.required,Validators.pattern("[0-9|a-z|A-Z|.]{10}@[A-Z|a-z]{5}.[a-z|A-Z]{3}")]),
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

    // if(this.firstname.length<5 || this.firstname.length>50)
    // {
    //   alert("Please enter first name between 5 to 50 letters..!");
    // }
    // if(this.lastname.length<5||this.lastname.length>50)
    // {
    //   alert("Please enter last name between 5 to 50 letters..!");
    // }
    // if(this.rollno.length!=10 || ((this.rollno.charAt(5)<'a'|| this.rollno.charAt(5)>'z')&&(this.rollno.charAt(5)<'A'|| this.rollno.charAt(5)>'Z')))
    // {
    //   alert("Please enter 10 digit correct roll number as shown in example..! 6th digit should be the letter");
    // }
    // if(this.yop<'2014' || this.yop>'2018')
    // {
    //   alert("Please select year of passing between 2014 to 2018...!")
    // }
    // if(this.place.length<5||this.place.length>50)
    // {
    //   alert("Please enter place name between 5 to 50 letters...!");
    // }
    // if(this.college.length<5||this.college.length>50)
    // {
    //   alert("Please enter college name between 5 to 50 letters...!");
    // }
    // if(this.mail=='')
    // {
    //   alert("Please enter correct mail id...!");
    // }
    if(this.lastname!="" && this.firstname!="" && this.branch!="" && this.dob!="" && this.yop!="" && this.rollno!="" && this.place!="" && this.college!="" && this.mail!="" && this.phone!="")
    {
    this.contact.push(a);
    }

  }

}
