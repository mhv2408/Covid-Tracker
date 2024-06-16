import { Component } from '@angular/core';
import { CovidDataService } from './covid-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'COVID-19 Tracker';
  
  covidData: any[] = [];

  constructor(private covidDataService: CovidDataService) {
    
    this.fetchData('az')
  }
  onStateChange(selectedState:string){
    this.fetchData(selectedState)
  }
  fetchData(selectedState:string) {
    this.covidDataService.getDailyDataByState(selectedState).subscribe(data => {
      if (data && data.length) {
        this.covidData = data.map((currentDay: { dateChecked: any; positiveIncrease: number; }, index: number) => {
          const previousDay = data[index - 1] || { positiveIncrease: 0 };
          return {
            ...currentDay,
            dateChecked: currentDay.dateChecked,
            positiveIncrease: currentDay.positiveIncrease,
            dailyDifference: currentDay.positiveIncrease - previousDay.positiveIncrease
          };
        });
      }
    });
  }

}
