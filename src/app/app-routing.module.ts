// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pregunta1Component } from './pregunta1/pregunta1.component';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { Pregunta3Component } from './pregunta3/pregunta3.component';

const routes: Routes = [
  { path: '', redirectTo: '/pregunta1', pathMatch: 'full' },
  { path: 'pregunta1', component: Pregunta1Component },
  { path: 'pregunta2', component: Pregunta2Component },
  { path: 'pregunta3', component: Pregunta3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
