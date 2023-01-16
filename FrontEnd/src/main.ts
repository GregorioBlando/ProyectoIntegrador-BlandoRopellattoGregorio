import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const firebaseConfig = {
  apiKey: "AIzaSyCaWlLWcmr47hn8oTWvPcPhhj7LS2Oe8Oo",
  authDomain: "proyectointegrador-frontend.firebaseapp.com",
  projectId: "proyectointegrador-frontend",
  storageBucket: "proyectointegrador-frontend.appspot.com",
  messagingSenderId: "80905364687",
  appId: "1:80905364687:web:6b780b5977074a195983ba",
  measurementId: "G-F5CN9L9RSC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);