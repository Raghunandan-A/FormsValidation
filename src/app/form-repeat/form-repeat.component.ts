import { Component }       from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../reactive';

@Component({
  selector: 'app-form-repeat',
  templateUrl: './form-repeat.component.html',
  styleUrls: ['./form-repeat.component.css']
})
export class FormRepeatComponent  {

  StudentForm: FormGroup;
 
  list : user[] = [];
 
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
    }));
  }
  
  onSubmit() {
   this.list.push(this.StudentForm.value);
    console.log(this.StudentForm.value)
        //this.getDOB()
        // phone regex: ^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$
        // this.myGroup.value.dateofbirth = new (this.myGroup.value.dateofbirth.substr(4, 4), this.myGroup.value.dateofbirth.substr(2, 2) - 1, this.myGroup.value.dateofbirth.substr(0, 2));
        // let month:number = this.StudentForm.value.dateofbirth.substring(2, 4);
        // month = month -1;
        // this.StudentForm.value['dateofbirth'] = new Date(this.StudentForm.value.dateofbirth.substring(4),month,this.StudentForm.value.dateofbirth.substring(0, 2));
        // console.log(this.StudentForm.value.dateofbirth); 
        // this.StudentForm.reset();

//         this.lists = [];
// for(var i=0;i<this.list.length;i++){
//   var student = this.list[i];
//   this.lists.push(student);
//    }
  }

}
