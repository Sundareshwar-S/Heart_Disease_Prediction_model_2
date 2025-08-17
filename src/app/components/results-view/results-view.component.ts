import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.css']
})
export class ResultsViewComponent {
  results: any[] = [];

  columns: string[] = [
    "Name", "Age", "Sex", "Chest Pain Type", "Bp", "Cholesterol", "Fbs Over 120",
    "Ekg Results", "Max Hr", "Exercise Angina", "St Depression", "Slope Of St",
    "Number Of Vessels Fluro", "Thallium", "Heart Disease Probability", "Predicted Outcome"
  ];

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.results = nav?.extras?.state?.['results'] || [];
  }
}
