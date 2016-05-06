import {Hiraganas} from '../collections/hiraganas.ts';


export function loadHiraganas() {

    if (Hiraganas.find().count() === 0) {
        var hiraganas = [

            {
                'romaji': 'a',
                'hiragana': 'a',
            },

            {
                'romaji': 'b',
                'hiragana': 'b',
            },
            {
                'romaji': 'c',
                'hiragana': 'c',
            }

        ];



        for (var i = 0; i < hiraganas.length; i++) {

            Hiraganas.insert(hiraganas[i]);

        }

    }

};