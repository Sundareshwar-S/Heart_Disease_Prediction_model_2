import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // ✅ Add this

@Component({
  standalone: true,
  selector: 'app-prediction-form',
  templateUrl: './prediction-form.component.html',
  styleUrls: ['./prediction-form.component.css'],
  imports: [CommonModule, FormsModule]
})
export class PredictionFormComponent {
  formData = {
    user: '',
    password: '',
    host: '',
    database_name: '',
    table_name: ''
  };

  errorMsg = '';

  constructor(private router: Router) {}

  submitForm() {
    const url = 'http://localhost:5001/api/predict';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Server returned an error');
        }
        return response.json();
      })
      .then(data => {
        if (data.error) {
          this.errorMsg = data.error;
        } else {
          this.errorMsg = '';
          this.router.navigate(['/results'], { state: { results: data.data } }); // ✅ Navigate
        }
      })
      .catch(error => {
        this.errorMsg = 'An error occurred: ' + error.message;
      });
  }
}
