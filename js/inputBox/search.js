import {
    Observable
} from 'rxjs';
import {
    tblBody
} from '../table/tblBody.js';
import { tblHead } from './../table/tblHead';
export var give = () => {
    var a = document.getElementById('txt').value.toLowerCase();
        var countryName=/^[a-zA-Z][13]*$/;
        if(countryName.test(a)==false)
        {
            alert("country name cannot contain number or special characters");
            return false;
        }
    Observable.fromPromise(fetch('https://restcountries.eu/rest/v2/all')
        .then((res) => res.json())
    ).subscribe(val => {
        newFunc(val, a)
    });

}
var newFunc = (val, a) => {
    var flag=true;
    Observable.from((val).filter(val => val.name.toLowerCase() == a)).subscribe((val) => {
        console.log(val,val.length);
   var b=`${tblHead()}
    ${tblBody(val,1)}
    </table>
    `;
        flag=false;

        window.shadow.innerHTML = b;
        document.getElementById('radioBtn').style.display="none"
    });
    if(flag)
    {
       window.shadow.innerHTML = `<h3>No results found!</h3>`; 
       document.getElementById('radioBtn').style.display="none"
    }

}