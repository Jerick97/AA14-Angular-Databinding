import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  title : string = 'Event Binding';
  subtitle : string = 'Two way binding';
  Ocultar : string = "Hide";
  show :boolean = false;
  texto !: string;
  constructor() { }

  ngOnInit(): void {
  }
  //Si se pulsa en el botón, actualiza la variable show y muestra o oculta el Div
  isShow(){
    if(this.show){
      this.Ocultar = "Hide"
      this.show = false;
    }else{
      this.Ocultar = "Show"
      this.show = true;
    }
    
  }
}
