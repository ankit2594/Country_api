export var getRadio = () => {
    return `<div id="radioBtn" style="padding-top:40px; float:right" class="md-radio">
     
    <input id="1" type="radio" name="sort" value="low">
    <label for="1">Sort by lowest population</label>


    <input id="2" type="radio" name="sort" value="high" >
    <label for="2">Sort by highest population</label> 

    <input id="3" type="radio" name="sort" checked>
    <label for="3">Sort by country</label></div>`
}