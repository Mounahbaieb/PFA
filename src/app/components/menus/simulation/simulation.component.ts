import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {
  value8: any;
  cities: any[];
  valSlider = 50;
  selectedDrop: SelectItem;
  simulationForm: FormGroup;
  submitted: boolean;

  constructor(private fb:FormBuilder) {
    this.cities = [
      {name: 'BMW', code: 'bm'},
      {name: 'Mercedes', code: 'Mr'},
      {name: 'Golf', code: 'Go'},
      {name: 'polo', code: 'Po'},
      {name: 'Range Rover', code: 'Rr'}
  ];
  this.simulationForm = this.fb.group({
    vehicule: ['', Validators.required],
    echeance: ['', Validators.required],
    duree: ['', Validators.required],

  });
  

   }

  ngOnInit(): void {
  }

  suivant(){
    this.submitted=true
    if(this.simulationForm.valid){
      console.log("hello");
    }
  }
  }


