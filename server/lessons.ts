import {Lessons} from '../collections/lessons.ts';
import {Meteor} from 'meteor/meteor';

Meteor.publish('lessons',function() {
    return Lessons.find({});
});

Meteor.publish('lesson', function(lessonId: string) {
    return Lessons.find({_id: lessonId});
});
