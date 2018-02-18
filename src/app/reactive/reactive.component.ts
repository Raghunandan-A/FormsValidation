
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import{user} from '../reactive';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})


export class ReactiveComponent {

list : user[] = [];
 
  myGroup: FormGroup
 
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    //var dateofbirth = new (dateofbirth)
      this.myGroup = this.fb.group({
       firstname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z_ ]+$')]],
       lastname :['',[Validators.required, Validators.minLength(5),  Validators.maxLength(50), Validators.pattern('^[a-zA-Z_ ]+$')]],
       rollno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]{5}[A-Z]{1}[0-9]{4}$')]],
       branch: ['', [Validators.required,, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z_ ]+$')]],
       dateofbirth: ['', [Validators.required]],
       email: ['', [Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}$')]],
       college: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(50),Validators.pattern('^[a-zA-Z_ ]+$')]],
       yearofpassedout: ['', [Validators.required, Validators.pattern('^[2]{1}[0]{1}[1]{1}[5-7]{1}$')]],
       place: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z_ ]+$')]],
       phoneno: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')]],
       phoneno2: ['' ,[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')]]
});
      }
      onSubmit(){ 
        this.list.push(this.myGroup.value);
        //this.getDOB()
        // phone regex: ^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$
        //this.myGroup.value.dateofbirth = new (this.myGroup.value.dateofbirth.substr(4, 4), this.myGroup.value.dateofbirth.substr(2, 2) - 1, this.myGroup.value.dateofbirth.substr(0, 2));
        let month:number = this.myGroup.value.dateofbirth.substring(2, 4);
        month = month -1;
        this.myGroup.value['dateofbirth'] = new Date(this.myGroup.value.dateofbirth.substring(4),month,this.myGroup.value.dateofbirth.substring(0, 2));
        console.log(this.myGroup.value.dateofbirth); 
        this.myGroup.reset(); 
      }
 
    }
   