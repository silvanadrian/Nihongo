import 'reflect-metadata';
import {Component} from '@angular/core';
import {FormBuilder, ControlGroup, Validators, Control} from '@angular/common';
import {Words} from '../../../collections/words.ts';
import {MeteorComponent} from "angular2-meteor/build/index";

@Component({
    selector: 'words-form',
    templateUrl: '/client/imports/words-form/words-form.html'
})

export class WordsForm {
    wordsForm: ControlGroup;

    constructor() {
        let fb = new FormBuilder();

        this.wordsForm = fb.group({
            japanisch:[''],
            deutsch:['']
        });
    }

    addWord(word) {
        if (this.wordsForm.valid) {
            Words.insert({
                japanisch: word.japanisch,
                deutsch: word.deutsch
            });
            (this.wordsForm.controls['japanisch']).updateValue('');
            (this.wordsForm.controls['deutsch']).updateValue('');

        }
    }
}

