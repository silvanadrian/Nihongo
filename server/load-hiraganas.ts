import {Hiraganas} from '../collections/hiraganas.ts';


export function loadHiraganas() {

    if (Hiraganas.find().count() === 0) {
        var hiraganas = JSON.parse(Assets.getText("hiraganas.json"));

        for (var i = 0; i < hiraganas.length; i++) {

            Hiraganas.insert(hiraganas[i]);

        }

    }

};