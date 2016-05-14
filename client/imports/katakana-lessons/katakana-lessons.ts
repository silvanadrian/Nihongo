import {Component} from '@angular/core';
import {Lessons} from '../../../collections/lessons';
import {Mongo} from 'meteor/mongo';
import {RouterLink} from '@angular/router-deprecated';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'lessons-list',
    templateUrl: '/client/imports/katakana-lessons/katakana-lessons.html',
    directives: [RouterLink]
})

export class KatakanaLessons extends MeteorComponent {
    lessons: Mongo.Cursor<Lesson>;

    constructor() {
        super();
        this.autorun(() => {
            this.subscribe('lessons', () => {
                this.lessons = Lessons.find({type: 'katakana'});
            }, true);
        });
    }



}


