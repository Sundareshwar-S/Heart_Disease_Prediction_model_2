import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';          // ✅ Add this line
import { routes } from './app/app.routes';                // ✅ Add this line

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)                                 // ✅ Add this line
  ]
});
