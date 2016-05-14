import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export var Lessons = new Mongo.Collection<Lesson>('lessons');

Lessons.allow({
    insert: function() {
        let user = Meteor.user();

        return !!user;
    },
    update: function () {
        let user = Meteor.user();

        return !!user;
    },
    remove: function() {
        let user = Meteor.user();

        return !!user;
    }
});