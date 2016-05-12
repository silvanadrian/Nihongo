import {Component} from '@angular/core';
import {Hiraganas} from '../../../collections/hiraganas';
import {Mongo} from 'meteor/mongo';
import {WordsForm} from '../words-form/words-form';
import {RouterLink} from '@angular//router-deprecated';
import {MeteorComponent} from 'angular2-meteor';
import {Counts} from 'meteor/tmeasday:publish-counts';
import {PaginationService, PaginatePipe, PaginationControlsCmp} from 'ng2-pagination';

@Component({
    selector: 'hiraganas-list',
    viewProviders: [PaginationService],
    templateUrl: '/client/imports/hiraganas-list/hiraganas-list.html',
    directives: [WordsForm, RouterLink, PaginationControlsCmp],
    pipes: [PaginatePipe]
})

export class HiraganasList extends MeteorComponent{
    hiraganas: Mongo.Cursor<Hiragana>;
    pageSize: number = 10;
    curPage: ReactiveVar = new ReactiveVar(1);
    hiraganasSize: number = 0;

    constructor() {
        super();
        this.autorun(() => {
            let options = {
                limit: this.pageSize,
                skip: (this.curPage.get() - 1) * this.pageSize,
            };

            this.subscribe('hiraganas', options, () => {
                this.hiraganas = Hiraganas.find();

            }, true);

        });

        this.autorun(() => {
            this.hiraganasSize = Counts.get('numberOfHiraganas');
        }, true);

    }

    removeHiragana(hiragana) {
        Hiraganas.remove(hiragana._id);
    }

    search(value:string) {
        if(value) {
            this.hiraganas = Hiraganas.find({ romaji: value});
        } else {
            this.hiraganas = Hiraganas.find();
        }
    }

    onPageChanged(page: number) {
        this.curPage.set(page);
    }

}


