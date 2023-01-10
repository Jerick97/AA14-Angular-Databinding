import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';



@NgModule({
  declarations: [
    HomeComponent,
    BindingComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    BindingComponent
  ]
})
export class PagesModule { }
