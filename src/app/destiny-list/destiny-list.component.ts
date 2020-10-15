import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-destiny-list',
  templateUrl: './destiny-list.component.html',
  styleUrls: ['./destiny-list.component.css']
})
export class DestinyListComponent implements OnInit {
  
  destinos: DestinoViaje[];

  constructor() { 

  	this.destinos = [];
  	
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string):boolean {
    this.destinos.push(new DestinoViaje(nombre, url));
    return false;
  }
}
