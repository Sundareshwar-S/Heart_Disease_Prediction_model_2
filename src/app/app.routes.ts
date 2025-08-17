import { Routes } from '@angular/router';
import { PredictionFormComponent } from './components/prediction-form/prediction-form.component';
import { ResultsViewComponent } from './components/results-view/results-view.component';

export const routes: Routes = [
  { path: '', component: PredictionFormComponent },
  { path: 'results', component: ResultsViewComponent }
];
