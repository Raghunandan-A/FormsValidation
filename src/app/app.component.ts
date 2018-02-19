import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
 
registerForm: FormGroup;
 
constructor(private fb:FormBuilder){


}
ngOnInit(){
  this.registerForm = this.fb.group({
    name:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
   
    lastname:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])],
    rollno:['',Validators.compose([Validators.required,Validators.pattern('^[0-9]+[A-Za-z]+[0-9]{4}$'),Validators.maxLength(10)])],
    branch:['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(3),Validators.maxLength(10)])],
    email:['', Validators.compose([Validators.required,Validators.pattern('^[A-Za-z0-9._%-]+@+[a-z0-9.-]+[\.]+[a-z]{2,4}$')])],
    college:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(5)])],
    yearpassed:['',Validators.compose([Validators.required,Validators.pattern('^201[4-8]$'),Validators.maxLength(4)])],
    phno:['',Validators.compose([Validators.required,Validators.pattern('^[0-9]{10}$'),Validators.maxLength(10)])],   
  })
};



  onSubmit() {
    console.log(this.registerForm.controls['name']);
  }

 // check() : void{
   // console.log(this.registerForm.get('email'));
  //}
}
