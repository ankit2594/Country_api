export var write=()=>
{
    var x=document.getElementById('txt').value;
    if(x=="")
    {
        window.shadow.innerHTML=window.output;
        document.getElementById('radioBtn').style.display="block";
    }
}  