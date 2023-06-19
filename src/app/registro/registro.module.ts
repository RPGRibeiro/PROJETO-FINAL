import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro/registro.component';
import {AppMaterialModule} from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { RegistroFormComponent } from './registro-form/registro-form.component';
@NgModule({
  declarations: [
    RegistroComponent,
    RegistroFormComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class RegistroModule { }
