export var tblBody = (count, inc) => {
    var y = `<tr>
     <td>${inc}</td>
     <td>${count.name}</td>
     <td>${count.capital}</td>
     <td>${count.currencies[0].name} (<b>${count.currencies[0].symbol}</b>)</td>
     <td>${count.nativeName}</td>
     <td>${count.population}</td>
     <td>${count.region}</td>
     <td>${count.callingCodes}</td>
     <td>${count.borders}</td>
     <td><img src=${count.flag} alt="flag" height=40px width=50px></td>   
     </tr>`
    return y;
}