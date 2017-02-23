//NIVELL DIFICULTAT, 2 EMINEM 
var canso = [{
   lletra: '¡Ay!',
   temps: 47,
   tempsPintar: 1
 }, 
 {
   lletra: '¡Fonsi!',
   temps: 47,
   tempsPintar: 1
 },
{
   lletra: '¡DY!',
   temps: 47,
   tempsPintar: 1
 },  
 {
   lletra: '¡Oh oh...!',
   temps: 47,
   tempsPintar: 1
 },             
  {
   lletra: 'Oh no, oh no...',
   temps: 47,
   tempsPintar: 1
 },            
 {
   lletra: '¡Oh!',
   temps: 47,
   tempsPintar: 1
 },             
 {
   lletra: '¡Yeah...!',
   temps: 47,
   tempsPintar: 1
 },             
 {
   lletra: '¡Dididiri Daddy!',
   temps: 47,
   tempsPintar: 1
 },             
 {
   lletra: '¡Go!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Sí, sabes que ya llevo rato mirándote!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Tengo que bailar contigo hoy!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Daddy Yankee!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Vi que tu mirada ya estaba llamándome!',
   temps: 47,
   tempsPintar: 1
 },
{
   lletra: '¡Muéstrame el camino que yo voy (Oh)!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Tú, tú eres el imán y yo soy el metal!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Me voy acercando y voy armando el plan!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Solo con pensarlo se acelera el pulso (Oh yeah)!',
   temps: 47,
   tempsPintar: 1
 },
{
   lletra: '¡Ya, ya me está gustando más de lo normal!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Todos mis sentidos van pidiendo más!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Fonsi!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Fonsi!',
   temps: 47,
   tempsPintar: 1
 },
{
   lletra: '¡Fonsi!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Fonsi!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Fonsi!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Fonsi!',
   temps: 47,
   tempsPintar: 1
 },
{
   lletra: '¡Fonsi!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Fonsi!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Fonsi!',
   temps: 47,
   tempsPintar: 1
 },
 {
   lletra: '¡Fonsi!',
   temps: 47,
   tempsPintar: 1
 },
              
              
];
var kitipasa;
var pasa = false;
var width = 0;
var musica = document.getElementById('despacito');
var progressBar = document.getElementById('barTime');
var time= document.getElementById('timing');
var play = document.getElementById('playArrow');
var restart = document.getElementById('restart');
var playVideo = document.getElementById('video');
 window.onload = function() {
   
   play.addEventListener("click", function() {
     if(musica.paused){
       musica.play();
       video.play();
       document.getElementById('jeje').innerHTML='pause';
       progressBar.setAttribute('max', musica.duration);
     }else{
        document.getElementById('jeje').innerHTML='play_arrow';
       musica.pause();
       video.pause();
     }
     pasa=true;
     var phrase = document.getElementById('test');
     phrase.value = canso[0].lletra;
     var linia = document.getElementById('actualFrase');
     var phraseColor = document.getElementById('printLetter');
     phraseColor.value = canso[0].lletra; 
     linia.setAttribute("class", "test1 mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-focused");

     for (var i = 1; i < canso.length; i++) {
       var p = document.createElement("p");
       p.setAttribute('class', 'comuna test1');
       p.setAttribute('id', canso[i].id);
       var text = document.createTextNode(canso[i].lletra);
       p.appendChild(text);
       var div = document.getElementById("lletraCanso");
       div.appendChild(p);
     }
   })
   
    restart.addEventListener("click", function() {
        musica.currentTime = 0;
        musica.play();
        video.play();
        video.currentTime = 0;
    })

   function animateWidth() {
    if(!musica.paused){
     var inputC = document.getElementById('printLetter');
     width = width + 1;
     inputC.style.width = width + "px";
     //console.log(inputC.style.width);
     if (pasa == true) {
       width = 0;
       pasa = false;
     }
    }
     
   }

   function phraseForward() {
    if(!musica.paused){
     var frases = document.getElementsByClassName("comuna");
     //console.log(frases);
     for (var i = 0; i < frases.length; i++) {
       if (i == 0) {
        // console.log(frases[i]);
         var phrase = document.getElementById('test');
         var phraseColor = document.getElementById('printLetter');
         phrase.value = frases[i].innerHTML;
         phraseColor.value = frases[i].innerHTML;
         var place = document.getElementById('placeholder');
         place.innerHTML = frases[i].innerHTML;
         frases[i].remove();
         pasa = true;
       }
     }
    }
     
   }

   
   
    function colorirBarra(){
    if(!musica.paused){
     progressBar.setAttribute('value', musica.currentTime);
      var min = 0;
      var interval = 0;
      var maxInterval = 60;
      if(musica.currentTime > maxInterval){
        maxInterval = maxInterval + 60;
        interval = interval + 60;
        min++;
      }
     
      var d = Number(musica.currentTime);
      var m = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);
      if(s.length == 2){
        s = "0" + s.toString();
      }
      m = m.toString();
      s = s.toString();
      if(m.length < 1){
        m = "00";
      }
      if(m.length == 1){
        m = "0" + m;
      }
      if(s.length < 2){
        s = "0"+s;
      }
      
      var temps =  m + ":" + s; 
      time.innerHTML= temps;
    }
   }
   
    progressBar.addEventListener("click", function(event){
      var duration = musica.duration;
      var posCanso = event.offsetX / this.offsetWidth  * duration ;
      musica.currentTime = posCanso;
      video.currentTime = posCanso;
    });
    //AKI HI PASAREM EL TEMPS DE CANVIAR DE LINIA ☻
    setInterval(phraseForward, 10000);
    //AKI HI PASAREM EL TEMPS DE PINTAR
    setInterval(animateWidth, 20);
    setInterval(colorirBarra);
 }
  var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})
