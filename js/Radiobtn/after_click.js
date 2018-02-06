import {
    tblHead
} from '../table/tblHead.js';
import {
    tblBody
} from '../table/tblBody.js';
export var after_Click = (arr) => {
    var inc = 0;
    var output = `
    ${tblHead()}
    </thead>`;
    arr.forEach((count) => {
        inc++;
        output += tblBody(count, inc);
    })
    output += `</table>`
    window.shadow.innerHTML = output;
}