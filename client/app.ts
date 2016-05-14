import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'bootstrap4-webpack-package';
import {Component, provide, enableProdMode} from '@angular/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';
import {APP_BASE_HREF} from '@angular/common';
import {HiraganaLessons} from './imports/hiragana-lessons/hiragana-lessons';
import {KatakanaLessons} from './imports/katakana-lessons/katakana-lessons';
import {LessonDetails} from './imports/lesson-details/lesson-details';
import {Homepage} from './imports/homepage/homepage';

enableProdMode();


@Component({
  selector: 'app',
  templateUrl: '/client/app.html',
  directives: [ROUTER_DIRECTIVES ]
})
@RouteConfig([
  { path: '/', as: 'Homepage', component: Homepage},
  { path: '/hiragana/', as: 'Hiragana', component: HiraganaLessons},
  { path: '/katakana/', as: 'Katakana', component: KatakanaLessons},
  { path: '/hiragana/:lessonId', as: 'LessonDetails', component: LessonDetails},
  { path: '/katakana/:lessonId', as: 'LessonDetails', component: LessonDetails}
])

class Nihongo {}

bootstrap(Nihongo, [ROUTER_PROVIDERS,provide(APP_BASE_HREF, { useValue: '/' })]);