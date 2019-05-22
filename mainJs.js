 function ani(){
    fadeOutEffect();
            //document.getElementById('plane').style.display = 'none';
             document.getElementById('btn-boarder').style.border ='none' ;
            document.getElementById('asdd').className = 'lds-eclipse';
            setTimeout(function(){ document.getElementById('btn-boarder').style.border ="2px solid #fff" ;
             document.getElementById('btn-boarder').style.borderRadius ="50%" ; 
             document.getElementById('bg').className ='animation2';}, 1600);


           
     const Http = new XMLHttpRequest();
const url='https://salty-lake-51238.herokuapp.com/mail';
Http.open("GET", url);
Http.send();
Http.onreadystatechange=(e)=>{
console.log(Http.responseText)
}
function fadeOutEffect() {
    var fadeTarget = document.getElementById("plane");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}
        }
        function anitwo(){
            //document.getElementById('bg').className ='animation2';
        }