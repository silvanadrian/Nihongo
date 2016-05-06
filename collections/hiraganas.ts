import {Mongo} from 'meteor/mongo';

export var Hiraganas = new Mongo.Collection<Hiragana>('hiraganas');