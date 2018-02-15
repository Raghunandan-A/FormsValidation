import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { telephonePipe } from './student/mobilepipe';
import { telephone2Pipe } from './student/phonepipe';
import { RepeaterComponent } from './repeater/repeater.component';




@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    telephonePipe,
    telephone2Pipe,
    RepeaterComponent
    
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
