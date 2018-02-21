import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { PhonePipe } from './pipe';
import { PhonePipe2 } from './pipe';
import { FormRepeatComponent } from './form-repeat/form-repeat.component';
// import { RepeatListComponent } from './repeat-list/repeat-list.component';
// import { studentService }         from './student-service';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    PhonePipe,
    PhonePipe2,
    FormRepeatComponent
    // RepeatListComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
 
 
  bootstrap: [AppComponent]
})
export class AppModule { }
