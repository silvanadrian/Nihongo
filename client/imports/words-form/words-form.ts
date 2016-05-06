import 'reflect-metadata';
import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';
import {Words} from '../../../collections/words.ts';

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
                name: word.name,
                description: word.description,
                location: word.location

            });
            (this.wordsForm.controls['name']).updateValue('');
            (this.wordsForm.controls['description']).updateValue('');
            (this.wordsForm.controls['location']).updateValue('');

        }
    }
}

