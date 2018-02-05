import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
    
  firstName = new FormControl("", Validators.required);
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      "firstName": this.firstName,
      "password":["", Validators.required]
  });
  }
  onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.form);
}

  ngOnInit() {
  }

}
