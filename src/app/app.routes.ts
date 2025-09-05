import { Routes } from '@angular/router';
import { LoginPageComponent } from './login/pages/login-page/login-page';
import { HomePage } from './home/pages/home-page/home-page';

export const routes: Routes = [
    { path: 'app', component: HomePage },
    { path: '**', component: LoginPageComponent },
];