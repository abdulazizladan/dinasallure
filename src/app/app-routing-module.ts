import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Contact } from './pages/contact/contact';

const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'contact', component: Contact, title: 'Contact — Dina’s Allure' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
