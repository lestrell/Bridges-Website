//main entry point
import {bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {App} from './app';

bootstrap(App, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy });
]);
