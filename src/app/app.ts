import { Component } from '@angular/core';
import { PredictionFormComponent } from './components/prediction-form/prediction-form.component';
import { ResultsViewComponent } from './components/results-view/results-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <h1>Heart Disease Prediction</h1>
      <app-prediction-form></app-prediction-form>
      <hr />
      <app-results-view></app-results-view>
    </div>
  `,
  imports: [PredictionFormComponent, ResultsViewComponent],
  styleUrls: ['./app.css']
})
export class AppComponent {}
