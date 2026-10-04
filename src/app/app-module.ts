import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Homepage } from './pages/homepage/homepage';
import { Contact } from './pages/contact/contact';
import { SharedModule } from './shared/shared-module';

@NgModule({
  declarations: [App, Homepage, Contact],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, SharedModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
