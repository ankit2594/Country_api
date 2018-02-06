import {
    write
} from './js/inputBox/input.js';
import {
    give
} from './js/inputBox/search.js';

import {
    tblHead
} from './js/table/tblHead.js';
import {
    tblBody
} from './js/table/tblBody.js';
import {
    header
} from './components/header.js';
import {
    getRadio
} from './js/Radiobtn/rtrnRadio.js';
import {
    glow
} from './js/Radiobtn/onclickRadio.js'
import {
    Observable
} from 'rxjs';
var arr = [];
export var getData = () => {
    arr = [];
    Observable.fromPromise(fetch('https://restcountries.eu/rest/v2/all')
        .then((res) => res.json())
    ).subscribe((data) => {
        document.body.innerHTML = `${header()}
    
     ${getRadio()}
    <div id="put"></div>`;
        window.shadow = document.querySelector('#put')
        .attachShadow({mode: 'open'});
        window.output = tblHead();
        var inc = 0;
        data.forEach((count) => {
            inc++;
            output += tblBody(count, inc);
            arr.push(count);
        });
        window.output += `</table>`
        window.shadow.innerHTML = output;
        document.getElementById('btnSearch').addEventListener('click', give);
        document.getElementById('txt').addEventListener('keyup', write);
        var radios = document.getElementsByName("sort");
        radios.forEach((c) => {
            c.onclick = () => {
                glow(c, arr)
            };
        });
    })
}



window.onload = getData;