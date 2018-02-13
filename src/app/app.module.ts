import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SubmitFormComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
