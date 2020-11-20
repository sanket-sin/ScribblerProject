var del=document.getElementById('Trs');
var btnn= document.getElementsByClassName('no-btn')[0];

function trash(){
    del.style.display="block";
}

btnn.onclick=function(){
    del.style.display="none";
}