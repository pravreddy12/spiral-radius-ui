import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponent } from './about/about.component';
import { DevforumComponent } from './devforum/devforum.component';

export const routes: Routes = [
    { path: '', component: HomeComponentComponent },
    { path: 'home', component: HomeComponentComponent },
    { path: 'about', component: AboutComponent },
    { path: 'devForum', component: DevforumComponent}
];
