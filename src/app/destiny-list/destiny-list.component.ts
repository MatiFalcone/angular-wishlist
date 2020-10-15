import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destiny-list',
  templateUrl: './destiny-list.component.html',
  styleUrls: ['./destiny-list.component.css']
})
export class DestinyListComponent implements OnInit {
  
  destinos: string[];

  constructor() { 

  	this.destinos = ['Barcelona', 'Buenos Aires', 'Quito', 'Madrid'];
  	
  }

  ngOnInit(): void {
  }

}
