import { Component, EventEmitter, Output } from '@angular/core';
import { CovidDataService } from '../../covid-data.service';


@Component({
  selector: 'app-state-selector',
  templateUrl: './state-selector.component.html',
  styleUrl: './state-selector.component.css'
})
export class StateSelectorComponent {
  @Output() stateSelected = new EventEmitter<string>();
  title = 'COVID-19 Tracker';
  states = ['az', 'ny', 'ca', 'tx', 'fl', 'al', 'ak', 'ar', 'co', 'ct', 'de', 'ga', 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'md', 'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj', 'nm', 'nc', 'nd', 'oh', 'ok', 'or', 'pa', 'ri', 'sc', 'sd', 'tn', 'ut', 'vt', 'va', 'wa', 'wv', 'wi', 'wy']; // Extend this list as needed
  selectedState:string='az';
  

  constructor(private covidDataService: CovidDataService) {
  }
  
  onStateChange(newState: string) {
    this.selectedState = newState;
    this.stateSelected.emit(this.selectedState);
  }
  

}
