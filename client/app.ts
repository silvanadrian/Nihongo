import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Mongo} from 'meteor/mongo';
import {Hiraganas} from '../collections/hiraganas';
import {WordsForm} from './imports/words-form/words-form';
import {Tracker} from 'meteor/tracker';

@Component({
  selector: 'app',
  templateUrl: '/client/app.html',
  directives: [WordsForm]
})

class Nihongo {
  hiraganas: Mongo.Cursor<Hiragana>;

  constructor() {
      this.hiraganas = Hiraganas.find();
  }

  removeHiragana(hirgana) {
    Hiraganas.remove(hirgana._id);
  }
}

bootstrap(Nihongo);
