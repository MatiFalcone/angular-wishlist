import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-destiny',
  templateUrl: './travel-destiny.component.html',
  styleUrls: ['./travel-destiny.component.css']
})
export class TravelDestinyComponent implements OnInit {

  @Input() nombre: string;

  constructor() {}

  ngOnInit(): void {
  }

}
