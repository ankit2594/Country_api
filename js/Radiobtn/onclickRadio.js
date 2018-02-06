import {
    getData
} from '../../fetchApi.js';
import {
    after_Click
} from './after_click.js';

export var glow = (bulb_count, arr) => {
    if (bulb_count.value == "low") {
        alert("Sorted by lowest population");
        var mySort = (a, b) => {
            return a.population - b.population;
        }
        arr.sort(mySort);


        after_Click(arr);

    } else if (bulb_count.value == "high") {
        alert("sorted by highest population");
        var mySort = (a, b) => {
            return b.population - a.population;
        }
        arr.sort(mySort);


        after_Click(arr);
    } else {
        alert("Sorted by country");
        getData();
    }
}