export var header=()=>
{
    var b=`
  <nav>
    <div class="nav-wrapper">
    <a href="index.html" class="brand-logo"><img src="../images/country-flags.jpg" height=55px width=55px><span>we are united</span></a>
      <ul class="right hide-on-med-and-down">
          <li><i class="material-icons">search</i></li>
          <li><input placeholder="country name" id="txt" type="text" class="validate"></li>   
        <li><a class="waves-effect waves-light btn" id="btnSearch">search</a></li>
      </ul>
    </div>
  </nav>`
  return b;
}