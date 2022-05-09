import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {
  value8: any;
  cities: any[];
  valSlider = 50;

  constructor() {
    this.cities = [
      {name: 'BMW', code: 'bm'},
      {name: 'Mercedes', code: 'Mr'},
      {name: 'Golf', code: 'Go'},
      {name: 'polo', code: 'Po'},
      {name: 'Range Rover', code: 'Rr'}
  ];
   }

  ngOnInit(): void {
  }

}
