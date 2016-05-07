import {Meteor} from "meteor/meteor";
import {loadHiraganas} from './load-hiraganas.ts';
import './hiraganas.ts';

Meteor.startup(loadHiraganas);

