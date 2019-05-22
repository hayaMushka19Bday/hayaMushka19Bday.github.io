setTimeout(function(){
    document.getElementById('downBaloon1').style.display ="none";
    document.getElementById('downBaloon2').style.display ="none";
    document.getElementById('downBaloon3').style.display ="none";
    document.getElementById('downBaloon4').style.display ="none";
    document.getElementById('downBaloon5').style.display ="none";
    document.getElementById('upBaloon1').style.visibility ='visible';
    document.getElementById('upBaloon2').style.visibility ="visible";
    document.getElementById('upBaloon3').style.visibility ="visible";
    document.getElementById('upBaloon4').style.visibility ="visible";
    document.getElementById('upBaloon5').style.visibility ="visible";
    setTimeout(function(){

        document.getElementById('upBaloon2').style.animationDuration ="4.4s";

        document.getElementById('upBaloon4').style.animationDuration ="4.4s";

    },150);
    setTimeout(function(){

        document.getElementById('upBaloon2').style.animationDuration ="4.3s";

        document.getElementById('upBaloon4').style.animationDuration ="4.3s";

    },250);
    setTimeout(function(){

        document.getElementById('upBaloon2').style.animationDuration ="4.2s";

        document.getElementById('upBaloon4').style.animationDuration ="4.2s";

    },350);
    setTimeout(function(){

        document.getElementById('upBaloon2').style.animationDuration ="4.2s";

        document.getElementById('upBaloon4').style.animationDuration ="4.2s";

    },450);
    setTimeout(function(){

        document.getElementById('upBaloon2').style.animationDuration ="4.1s";

        document.getElementById('upBaloon4').style.animationDuration ="4.1s";

    },550);
    setTimeout(function(){

        document.getElementById('upBaloon2').style.animationDuration ="4s";

        document.getElementById('upBaloon4').style.animationDuration ="4s";

    },650);
    setTimeout(function(){

        document.getElementById('upBaloon2').style.animationDuration ="4s";

        document.getElementById('upBaloon4').style.animationDuration ="4s";

    },750);
    
   }, 7000);  
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
console.log(Http.responseText);
};
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
};



 
 }
        function asad(){

        }
        function anitwo(){
            //document.getElementById('bg').className ='animation2';
        }