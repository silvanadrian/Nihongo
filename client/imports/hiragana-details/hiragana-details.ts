import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hiraganas} from '../../../collections/hiraganas';
import {RouterLink} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'hiragana-details',
    templateUrl: '/client/imports/hiragana-details/hiragana-details.html',
    directives: [RouterLink]
})

export class HiraganaDetails extends MeteorComponent {
    hiragana: Object;

    constructor(params: RouteParams) {
        super();
        var hiraganaId = params.get('hiraganaId');
        this.subscribe('hiragana',hiraganaId, () => {
            this.hiragana = Hiraganas.findOne(hiraganaId);
        },true);

    }

    saveHiragana(hiragana) {

        Hiraganas.update(hiragana._id, {

            $set: {
                romaji: hiragana.romaji,
                hiragana: hiragana.hiragana
            }

        });

    }
}

