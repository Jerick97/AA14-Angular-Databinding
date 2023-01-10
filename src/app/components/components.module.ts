import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HijoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HijoComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
