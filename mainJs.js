 function ani(){
            document.getElementById('plane').className ='animation';
     const Http = new XMLHttpRequest();
const url='https://salty-lake-51238.herokuapp.com/mail';
Http.open("GET", url);
Http.send();
Http.onreadystatechange=(e)=>{
console.log(Http.responseText)
}
        }
        function anitwo(){
            document.getElementById('bg').className ='animation2';
        }