
import { Component,Pipe,Injectable } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import{user} from '../reactive';
import { Input } from '@angular/core/src/metadata/directives';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveComponent {

list : user[] = [];
 
 
  myGroup: FormGroup
 
  constructor(private fb: FormBuilder) {

 this.createform();
  }

  createform() {
      this.myGroup = this.fb.group({
       firstname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z_ ]+$')]],
       lastname :['',[Validators.required, Validators.minLength(5),  Validators.maxLength(50), Validators.pattern('^[a-zA-Z_ ]+$')]],
       rollno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]{5}[A-Z]{1}[0-9]{4}$')]],
       branch: ['', [Validators.required,, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z_ ]+$')]],
       dateofbirth: ['', [Validators.required]],
       email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+[\@]{1}[a-zA-Z]+[\.]{1}$')]],
       college: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
       yearofpassedout: ['', [Validators.required, Validators.pattern('^[2]{1}[0]{1}[1]{1}[5-7]{1}$')]],
       place: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z_ ]+$')]],
       phoneno: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')]],
       phoneno2: ['' ,[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')]]
});
      }
      onSubmit(){ 
        this.list.push(this.myGroup.value); 
      }
      
    }
   