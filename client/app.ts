import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'bootstrap4-webpack-package';
import {LoginButtons} from 'angular2-meteor-accounts-ui';
import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {APP_BASE_HREF} from 'angular2/platform/common';
import {HiraganasList} from './imports/hiraganas-list/hiraganas-list';
import {HiraganaDetails} from './imports/hiragana-details/hiragana-details';
import {Homepage} from './imports/homepage/homepage';

@Component({
  selector: 'app',
  templateUrl: '/client/app.html',
  directives: [ROUTER_DIRECTIVES,LoginButtons ]
})
@RouteConfig([
  { path: '/', as: 'Homepage', component: Homepage},
  { path: '/hiragana/', as: 'HiraganasList', component: HiraganasList},
  { path: '/hiragana/:hiraganaId', as: 'HiraganaDetails', component: HiraganaDetails}
])

class Nihongo {}

bootstrap(Nihongo, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);