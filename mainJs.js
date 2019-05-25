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
};


 var isHappend=false;
function bbb(){
    const Http = new XMLHttpRequest();
const url='https://salty-lake-51238.herokuapp.com/asdd/?page='+ document.getElementById('passs').value;
Http.open("GET", url);
Http.send("asdasdasd");
Http.onreadystatechange = function() {
    var b;
    if ((Http.readyState==4)&&Http.status ==200){
        var a = JSON.parse(Http.responseText);

        if(a.result.toString().length<3){
            document.getElementById('btn2').click();
            
            document.getElementById('dlg-header').innerHTML =a.sent;
            if(a.result>1){
                document.getElementById('dlg-content').innerHTML = " נשארו לך עוד "+a.result+" פעמים ";
            }else{
                document.getElementById('dlg-content').innerHTML = "..נסיון אחרון";
        }
            
           
          }else if(a.result.toString().length<100){
              diff  =parseInt(a.time);
              isTimer=true;
            document.getElementById('btn2').click();

            document.getElementById('dlg-header').innerHTML =a.result;
          }else{
        document.getElementById('ins').innerHTML = a.result;
        document.getElementById('form').style.display='none';
          }
    }
    
}


}
var isTimer =false;
function getTimeString(){
    var tempTime = getTimer();

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -=  days * (1000 * 60 * 60 * 24);
    
    var hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    
    var mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);
    
    var seconds = Math.floor(diff / (1000));
    diff -= seconds * (1000);
  
}

function getTimer(){
    return timer;
}
var diff = 1000;
setInterval(function(){
    if(isTimer){
    diff-= 1000;
  
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
 if((days >= 0)||(hours >= 0)||(mins >= 0)||(seconds >= 0)){
     if(days<=9){
days="0"+days;
     }
     if(hours<=9){
        hours="0"+hours;
    }
    if(mins<=9){
        mins="0"+mins;
    }
    if(seconds<=9){
        seconds="0"+seconds;
    }
    document.getElementById('dlg-content').innerHTML =days + ":" + hours + ":" + mins + ":" + seconds + " -זמן עד הנסיון הבא";
 }else{
     isTimer = false;
    document.getElementById('dlg-content').innerHTML ="אפשר לנסות שוב כעת";
 }
}
  },1000);
function sss(){
    const Http = new XMLHttpRequest();
const url='https://salty-lake-51238.herokuapp.com/auth';
Http.open("GET", url);
Http.send("asdasdasd");
Http.onreadystatechange = function() {if ((Http.readyState==4)&&Http.status ==200) alert(Http.responseText);};

}
        function qqq(){
alert("asdsadasdsd");
        }
        
        
    
