 var canso = [{
   lletra: 'Test prova 1, 2, 3',
   temps: 1,
   tempsPintar: 1
 }, {
   lletra: 'lorem impas dweiwjfiqd',
   temps: 2,
   tempsPintar: 1
 }, {
   lletra: 'asdmwemf we fjaisjd iqwjd',
   temps: 3,
   tempsPintar: 1
 }, {
   lletra: 'asdmwemf we fjaisjd iqwjd',
   temps: 4,
   tempsPintar: 1
 }, {
   lletra: 'asdmwemf we fjaisjd iqwjd',
   temps: 5,
   tempsPintar: 1
 }, {
   lletra: 'asdmwemf we fjaisjd iqwjd',
   temps: 6,
   tempsPintar: 1
 }, {
   lletra: 'asdmwemf we fjaisjd iqwjd',
   temps: 7,
   tempsPintar: 1
 }, {
   lletra: 'asdmwemf we fjaisjd iqwjd',
   temps: 8,
   tempsPintar: 1
 }, {
   lletra: 'asdmwemf we fjaisjd iqwjd',
   temps: 9,
   tempsPintar: 1
 }, ];
 var kitipasa;
 var pasa = false;
 var width = 0;
 var musica = document.getElementById('despacito');
 var progressBar = document.getElementById('barTime');
 var time= document.getElementById('timing');
 window.onload = function() {
   
   kitipasa = function kitipasa() {
     if(musica.paused){
       musica.play();
       document.getElementById('playArrow').innerHTML='pause';
       progressBar.setAttribute('max', musica.duration);
     }else{
        document.getElementById('playArrow').innerHTML='play_arrow';
       musica.pause();
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
   }

   function animateWidth() {
    if(!musica.paused){
     var inputC = document.getElementById('printLetter');
     width = width + 1;
     inputC.style.width = width + "px";
     console.log(inputC.style.width);
     if (pasa == true) {
       width = 0;
       pasa = false;
     }
    }
     
   }

   function phraseForward() {
    if(!musica.paused){
     var frases = document.getElementsByClassName("comuna");
     console.log(frases);
     for (var i = 0; i < frases.length; i++) {
       if (i == 0) {
         console.log(frases[i]);
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
     time.innerHTML='0'+(musica.currentTime/60).toFixed(2)+' - 0'+(musica.duration/60).toFixed(2);
    }
   }
   
    progressBar.addEventListener("click", function(event){
      var duration = musica.duration;
      var posCanso = event.offsetX / this.offsetWidth  * duration ;
      musica.currentTime = posCanso;
    });
    //AKI HI PASAREM EL TEMPS DE CANVIAR DE LINIA ☻
    setInterval(phraseForward, 10000);
    //AKI HI PASAREM EL TEMPS DE PINTAR
    setInterval(animateWidth, 20);
    setInterval(colorirBarra);
 }