import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-travel-destiny',
  templateUrl: './travel-destiny.component.html',
  styleUrls: ['./travel-destiny.component.css']
})
export class TravelDestinyComponent implements OnInit {

  @Input() destino: DestinoViaje;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() {}

  ngOnInit(): void {
  }

}
