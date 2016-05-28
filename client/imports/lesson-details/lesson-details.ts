import {Component} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {Lessons} from '../../../collections/lessons';
import {RouterLink} from '@angular/router-deprecated';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'lesson-details',
    templateUrl: '/client/imports/lesson-details/lesson-details.html',
    directives: [RouterLink]
})

export class LessonDetails extends MeteorComponent {
    lesson: Object;

    constructor(params: RouteParams) {
        super();
        let permalink = params.get('permalink');
        this.autorun(() => {
        this.subscribe('lesson',permalink, () => {
            this.lesson = Lessons.findOne({permalink: permalink});
        }, true);
        });

    }
}

