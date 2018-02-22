import { Component } from '@angular/core';
import { ReactiveFormsModule, MaxLengthValidator } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

// import { Address, Hero} from '../data-model';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})

export class RepeaterComponent {


  studentForm: FormGroup;
  lists: Array<object> = [];



  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.studentForm = this.fb.group({
      students: this.fb.array([]),
    });
    this.AddNew();
  }

  get students(): FormArray {
    return this.studentForm.get('students') as FormArray;
  };


  submitDetails() {
    // this.studentForm.value.dob = new Date(this.studentForm.value.dob);
    for (var i = 0; i < this.students.length; i++) {
      this.studentForm.value.students[i].dob = new Date(this.studentForm.value.students[i].dob.substr(4, 4), this.studentForm.value.students[i].dob.substr(2, 2) - 1, this.studentForm.value.students[i].dob.substr(0, 2));
      this.lists.push(this.studentForm.value.students[i]);
    }
    this.studentForm = this.fb.group({
      students: this.fb.array([]),
    });
    this.AddNew();
  }

  validationMessages = {
    required: 'This field is Required',
    minLength: ' must be at least 5 characters',
    maxLength: ' cannot more than 20 characters',
    pattern: ' Should match the pattern ',
    patt: ' must be '
  }



  AddNew() {
    this.students.push(this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      lastname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      address: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      college: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      rollnumb: ['', [Validators.required, Validators.pattern('^[0-9]{5}[A-Z]{1}[0-9]{4}$')]],
      branch: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.pattern('^201[4-8]$')]],
      dob: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%-]+@+[A-Za-z0-9.-]+[\.]+[A-Za-z]{2,4}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]

    }));
  }

  toggleValidMessages(index, fieldName, property) {
    // switch (property) {
    //   case '':
    //     return this.studentForm.controls.students['controls'][index]['controls'][fieldName].errors && this.studentForm.controls.students['controls'][index]['controls'][fieldName].touched
    //   case 'required':
    //     return this.studentForm.controls.students['controls'][index]['controls'][fieldName].errors.required
    //   case 'minLength':
    //     return this.studentForm.controls.students['controls'][index]['controls'][fieldName].errors.minlength
    //   case 'maxLength':
    //     return this.studentForm.controls.students['controls'][index]['controls'][fieldName].errors.maxlength
    //   case 'pattern':
    //     return this.studentForm.controls.students['controls'][index]['controls'][fieldName].errors.pattern

    // }

    if (property == '') {
      return this.studentForm.controls.students['controls'][index]['controls'][fieldName].errors && this.studentForm.controls.students['controls'][index]['controls'][fieldName].touched
    }
    else {
      return this.studentForm.controls.students['controls'][index]['controls'][fieldName].errors[property];
    }
  }
}
