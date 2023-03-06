function digit(n){
    document.getElementById("h1").innerHTML+=n.toString();
}
function clear2(){
    document.getElementById("h1").innerHTML="";
}
function backspace(){ 
    x=document.getElementById("h1").innerHTML;
    y = x.substring(0, x.length-2);
    document.getElementById("h1").innerHTML=y;
}
function equal(){
    exprs=document.getElementById("h1").innerHTML;

}