import './polyfills';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
//   // Ensure Angular destroys itself on hot reloads.
//   if (window['ngRef']) {
//     window['ngRef'].destroy();
//   }
//   window['ngRef'] = ref;

//   // Otherwise, log the boot error
// }).catch(err => console.error(err));

bootstrapApplication(AppComponent);
