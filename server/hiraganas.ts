import {Hiraganas} from '../collections/hiraganas';
import {Meteor} from 'meteor/meteor';
import {Counts} from 'meteor/tmeasday:publish-counts';

Meteor.publish('hiraganas', function(options: Object) {
    Counts.publish(this, 'numberOfHiraganas', Hiraganas.find(), { noReady: true });
    return Hiraganas.find({},options);
});

Meteor.publish('hiragana', function(hiraganaId: string) {
    return Hiraganas.find({_id: hiraganaId});
});
