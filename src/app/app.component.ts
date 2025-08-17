import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import this

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet> <!-- ✅ This is where Angular will inject pages -->
  `,
  imports: [RouterModule],
  styleUrls: ['./app.css']
})
export class AppComponent {}
