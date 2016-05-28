import {Lessons} from '../collections/lessons.ts';


export function loadLessons() {

    if (Lessons.find({type: 'hiragana'}).count() === 0) {
        var hiraganas = JSON.parse(Assets.getText("hiragana.json"));

        for (var i = 0; i < hiraganas.length; i++) {

            Lessons.insert(hiraganas[i]);

        }

    }

    if (Lessons.find({type: 'katakana'}).count() === 0) {
        var katakana = JSON.parse(Assets.getText("katakana.json"));

        for (var i = 0; i < katakana.length; i++) {

            Lessons.insert(katakana[i]);

        }

    }

};