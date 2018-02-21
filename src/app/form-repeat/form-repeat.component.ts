import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../reactive';

@Component({
  selector: 'app-form-repeat',
  templateUrl: './form-repeat.component.html',
  styleUrls: ['./form-repeat.component.css']
})
export class FormRepeatComponent {

  StudentForm: FormGroup;


      required= ' is required'
      minlength= ' should be min 5 characters'
      maxlength= ' should be max 50 characters'
      pattern= 'only Alphabets are allowed'
      rlno = 'Rollno should be in 12345A6789 format'
      emailpat = 'should match the pattern xxxxx@xx.xx'
      YOP = '2015-2017 is allowed'
      telmin = 'Should me min 10 numbers'
      telmax = 'Should me max 10 numbers'
      telpat = 'only numbers allowed'
      DOB = 'only numbers are allowed'
  list: user[] = [];

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.StudentForm = this.fb.group({
      studentlist: this.fb.array([]),
    });
    this.addrow();
  }

  get studentlist(): FormArray {
    return this.StudentForm.get('studentlist') as FormArray;
  };

  ngOnInit() {

  }


  addrow() {
    this.studentlist.push(this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z_ ]+$')]],
      lastname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z_ ]+$')]],
      rollno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]{5}[A-Z]{1}[0-9]{4}$')]],
      branch: ['', [Validators.required, , Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z_ ]+$')]],
      dateofbirth: ['', [Validators.required,Validators.pattern('^[0-9]{8}$')]],
      email: ['', [Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}$')]],
      college: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z_ ]+$')]],
      yearofpassedout: ['', [Validators.required, Validators.pattern('^[2]{1}[0]{1}[1]{1}[5-7]{1}$')]],
      place: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z_ ]+$')]],
      phoneno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')]],
      phoneno2: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')]]
    }));
    //this.StudentForm.valueChanges.subscribe(data => this.validateForm());
  }
  // validateForm() {
  //   for (let field in this.formErrors) {
  //     // clear the input field errors
  //     this.formErrors[field] = '';
  //     // grab an input field by name
  //     let input = this.StudentForm.get(field);
  //     // figure out the type of errors
  //     if (input.errors && input.touched) {

  //       for (let error in input.errors) {
  //         // loop over the formerrors field names
  //         // assign that tyoe of error message to a variable
  //         this.formErrors[field] = this.validationMessages[field][error];

  //       };
  //     }
  //   }
  // }

  showHideValidationMessage(index, fieldName, property){
    //StudentForm.controls.studentlist['controls'][i]['controls']['lastname'].errors && StudentForm.controls.studentlist['controls'][i]['controls']['lastname'].touched
    //return true;
    switch(property){
      case '':
        return this.StudentForm.controls.studentlist['controls'][index]['controls'][fieldName].errors && this.StudentForm.controls.studentlist['controls'][index]['controls'][fieldName].touched
      case 'required':
        return this.StudentForm.controls.studentlist['controls'][index]['controls'][fieldName].errors.required
        
      case 'minlength':
        return this.StudentForm.controls.studentlist['controls'][index]['controls'][fieldName].errors.minlength
      case 'maxlength':
        return this.StudentForm.controls.studentlist['controls'][index]['controls'][fieldName].errors.maxlength
      case 'pattern':
        return this.StudentForm.controls.studentlist['controls'][index]['controls'][fieldName].errors.pattern
    }
  }

  onSubmit() {
    //this.getDOB()
    // phone regex: ^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$
    // this.myGroup.value.dateofbirth = new (this.myGroup.value.dateofbirth.substr(4, 4), this.myGroup.value.dateofbirth.substr(2, 2) - 1, this.myGroup.value.dateofbirth.substr(0, 2));

    for (let i = 0; i < this.studentlist.length; i++) {
      let month: number = this.StudentForm.value.studentlist[i].dateofbirth.substring(2, 4);
      month = month - 1;
      this.StudentForm.value.studentlist[i].dateofbirth = new Date(this.StudentForm.value.studentlist[i].dateofbirth.substring(4), month, this.StudentForm.value.studentlist[i].dateofbirth.substring(0, 2));
      this.list.push(this.StudentForm.value.studentlist[i]);
    }

    this.createForm();
    console.log(this.StudentForm.value)
  }

}
