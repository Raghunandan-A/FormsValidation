import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;
  lists: Array<object> = [];
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    var dob = new Date(dob);
    this.studentForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50),]],
      lastname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(70)]],
      college: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      rollnumb: ['', [Validators.required, Validators.pattern('^[0-9]{5}[A-Z]{1}[0-9]{4}$')]],
      branch: ['', [Validators.required]],
      year: ['', [Validators.required]],
      dob: ['', [Validators.required,Validators.pattern('^[0-9]{8}$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      phone: ['', [Validators.required,Validators.pattern('^[0-9]{10}$')]]
    });
  }

  sumbitDetails() {
    var x = this.studentForm.value;
    x.dob = new Date(x.dob.substr(4, 4), x.dob.substr(2, 2) - 1, x.dob.substr(0, 2));
    console.log(x.dob);
    this.lists.push(x);
    this.studentForm.reset();
  }
}
