//template
import {Item} from './item';
import { isoParse } from 'd3';
const elem = document.getElementById('output');
const aBook = new Item('はじめてのTypeScript',110);
aBook.say(elem);

//c3

import * as c3 from 'c3'

let chart = c3.generate({
    bindto: '#chart',
    data: {
        type: 'donut',
        columns: [
            ['いい感じ',50],
            ['イマイチ',50]
        ]
    },
    donut: {
        title: 'Typescriptの印象は？'
    }
})
