import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  //El decorador Input escuchara el valor que recibirá del componente padre, luego mostrara ese valor en el Input del Formulario
  @Input() valueHijo !: string;
  constructor() { }

  ngOnInit(): void {
  }

}
