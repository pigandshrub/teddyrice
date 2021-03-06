import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent, environment, appRouterProviders } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [appRouterProviders, Title]);
