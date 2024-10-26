import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


//desde aca arrrnca la aplicacion , llama al index.html y aplica sobre al app-root

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
