import { Component } from '@angular/core';

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

    if(this.firstname.length<5 || this.firstname.length>50)
    {
      alert("Please enter first name between 5 to 50 letters..!");
    }
    if(this.lastname.length<5||this.lastname.length>50)
    {
      alert("Please enter last name between 5 to 50 letters..!");
    }
    if(this.rollno.length!=10 || ((this.rollno.charAt(5)<'a'|| this.rollno.charAt(5)>'z')&&(this.rollno.charAt(5)<'A'|| this.rollno.charAt(5)>'Z')))
    {
      alert("Please enter 10 digit correct roll number as shown in example..! 6th digit should be the letter");
    }
    if(this.yop<'2014' || this.yop>'2018')
    {
      alert("Please select year of passing between 2014 to 2018...!")
    }
    if(this.place.length<5||this.place.length>50)
    {
      alert("Please enter place name between 5 to 50 letters...!");
    }
    if(this.college.length<5||this.college.length>50)
    {
      alert("Please enter college name between 5 to 50 letters...!");
    }
    if(this.mail=='')
    {
      alert("Please enter correct mail id...!");
    }
    if(this.lastname!="" && this.firstname!="" && this.branch!="" && this.dob!="" && this.yop!="" && this.rollno!="" && this.place!="" && this.college!="" && this.mail!="" && this.phone!="")
    {
    this.contact.push(a);
    }
  }


}
