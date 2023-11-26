import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './angular-material/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Pregunta1Component } from './pregunta1/pregunta1.component';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { FormsModule } from '@angular/forms';
import { Pregunta3Component } from './pregunta3/pregunta3.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  
  declarations: [
    AppComponent,
    Pregunta1Component,
    Pregunta2Component,
    Pregunta3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
