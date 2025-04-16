import { Routes } from '@angular/router';
import { ProdottoInserimentoComponent } from './components/prodotto-inserimento/prodotto-inserimento.component';
import { ProdottoListaComponent } from './components/prodotto-lista/prodotto-lista.component';
import { ProdottoModificaComponent } from './components/prodotto-modifica/prodotto-modifica.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: "", 
        redirectTo: "home", 
        pathMatch: "full"
    },
    {
        path: "home", 
        component: HomeComponent
    },
    {
        path: "about", 
        component: AboutComponent
    },
    {
        path: "contact", 
        component: ContactComponent
    },
    {
        path: "user/signup", 
        component: SignupComponent
    },
    {
        path: "user/signin", 
        component: SigninComponent
    },
    {
        path: "user/dashboard", 
        component: DashboardComponent, 
        canActivate: [authGuard]
    },
    {
        path: "prodotto/inserisci", 
        component: ProdottoInserimentoComponent, 
        canActivate: [authGuard]
    },
    {
        path: "prodotto/lista", 
        component: ProdottoListaComponent, 
        canActivate: [authGuard]
    },
    {
        path: "prodotto/modifica/:codice", 
        component: ProdottoModificaComponent, 
        canActivate: [authGuard]
    }
    
];
