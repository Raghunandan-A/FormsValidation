import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { PhonePipe } from './reactive/pipe';
import { PhonePipe2 } from './reactive/phonepipe';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    PhonePipe,
    PhonePipe2
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
