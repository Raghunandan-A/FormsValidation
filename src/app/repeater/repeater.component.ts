import { Component, OnChanges } from '@angular/core';
import { ReactiveFormsModule, MinLengthValidator } from '@angular/forms';
import { FormBuilder, FormGroup,FormControl ,FormArray,Validators} from '@angular/forms';

// import { Address, Hero} from '../data-model';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})

export class RepeaterComponent  {
// Address:String;

  studentForm: FormGroup;
  lists: Array<object> = [];
  


  constructor(private fb: FormBuilder) {
      this.createForm();
      
  }


  createForm(){
    this.studentForm=this.fb.group({
    students:this.fb.array([]),
  });
  }

  get students(): FormArray {
    return this.studentForm.get('students') as FormArray;
  };

  AddNew() {
    //this.students.push(this.fb.group(new Address()));
    this.students.push(this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      address: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(70)]],
      college: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      rollnumb: ['', [Validators.required, Validators.pattern('^[0-9]{5}[A-Z]{1}[0-9]{4}$')]],
      branch: ['', [Validators.required]],
      year: ['', [Validators.required,Validators.pattern('^201[4-8]$')]],
      dob: ['', [Validators.required,Validators.pattern('^[0-9]{8}$')]],
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%-]+@+[a-z0-9.-]+[\.]+[a-z]{2,4}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      phone: ['', [Validators.required,Validators.pattern('^[0-9]{10}$')]]
      }));
    }
  submitDetails() {
    
    this.lists.push(this.studentForm.value);
    this.studentForm.reset();
    
  }
}
