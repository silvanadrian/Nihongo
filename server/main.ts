import {Meteor} from "meteor/meteor";
import {loadLessons} from './load-lessons.ts';
import './lessons';

Meteor.startup(loadLessons);

