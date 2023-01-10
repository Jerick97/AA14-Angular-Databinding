import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';



@NgModule({
  declarations: [
    HijoComponent,
    HeaderComponent,
    DatabindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HijoComponent,
    HeaderComponent,
    DatabindingComponent
  ]
})
export class ComponentsModule { }
