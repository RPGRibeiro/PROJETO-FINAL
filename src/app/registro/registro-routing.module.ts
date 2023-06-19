import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { RegistroFormComponent } from './registro-form/registro-form.component';

const routes: Routes = [
  {path: '', component: RegistroComponent},
  {path: 'new', component: RegistroFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
