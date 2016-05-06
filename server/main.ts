import {Meteor} from "meteor/meteor";
import {Hiraganas} from '../collections/hiraganas.ts';
import {loadHiraganas} from './load-hiraganas.ts';

Meteor.startup(loadHiraganas);

