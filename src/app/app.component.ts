import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import{HttpModule} from '@angular/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rForm: FormGroup;
  post: any;
  fname: string = '';
  lname: string ='';
  branch: string ='';
  yop: number;
  place: string ='';
  mobilenum: number;
  dob: number;
  regnum: number;
  emailid: string ='';
  description: string = '';
  titleAlert: string = 'Please enter a valid name ex: Raj size 3-32 char';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'fname': [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(32)])],
      'lname': [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(32)])],
      'place': [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(32)])],
      'branch': [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(32)])],
      'mobilenum': [null, Validators.compose([Validators.required,Validators.pattern('^[789]+[0-9]{9}$'), Validators.minLength(10), Validators.maxLength(10)])],
      'regnum': [null, Validators.compose([Validators.required,Validators.pattern('^[0-9]{12}$'), Validators.minLength(12), Validators.maxLength(12)])],
      'dob': [null, Validators.required],
      'yop': [null, Validators.compose([Validators.required,Validators.pattern('^[0-9]{4}$')])],
      'emailid': [null,Validators.compose([Validators.required,Validators.pattern('^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)')])],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(150)])],
      'validate': ''
    });
  }

  addPost(post) {
    this.fname = post.fname;
    this.lname = post.lname;
    this.branch = post.branch;
    this.place=post.place;
    this.yop=post.yop;
    this.description = post.description;
    this.mobilenum = post.mobilenum;
    this.regnum = post.regnum;
    this.emailid=post.emailid;
    this.dob = post.dob;

  }
 
}

