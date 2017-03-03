function Get(yourUrl) {
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET", yourUrl, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

var canso = JSON.parse(Get('/js/despasito.json'));
var pasa = false;
var width = 0;
var musica = document.getElementById('despacito');
var musicaDemo = document.getElementById('musicaDemo');
var progressBar = document.getElementById('barTime');
var placholdTime = document.getElementById('placeBarTime');
var time = document.getElementById('timing');
var play = document.getElementById('playArrow');
var playDemo = document.getElementById('playDemo');
var restart = document.getElementById('restart');
var video = document.getElementById('video');
var forward = document.getElementById('forward');
var rewind = document.getElementById('rewind');
var tempsPintar = canso[0].tempsPintar;
var tempsEliminar = canso[0].temps;
var contador = 0;
var comencar = false;
var haClicat = false;
var indexAlQueEstem = 0;
// funcio per tal d'obtenir l'index amb el cual es troba dins de la canso i poder anar sincronitzats
function obtenirIndex() {
  for (var i = 0; i < canso.length; i++) {
    if (musica.currentTime > canso[i].temps && musica.currentTime < canso[i].tempsFinal) {
      indexAlQueEstem = i;
    }
  }
  
  return indexAlQueEstem;
}

function test() {
  var frases = document.getElementsByClassName("comuna");
  var phrase = document.getElementById('test');
  var phraseColor = document.getElementById('printLetter');
  var place = document.getElementById('placeholder');
  console.log(obtenirIndex());
  if (musica.currentTime > canso[contador].temps && musica.currentTime < canso[contador].tempsFinal) {
    //al ser true es posa en marxa el pinta lletra en el setInterval
    comencar = true;
  }
  if (musica.currentTime > canso[contador].tempsFinal) {
    //eliminem la frase i incrementem el contador
    phrase.value = frases[contador].innerHTML;
    phraseColor.value = frases[contador].innerHTML;
    place.innerHTML = frases[contador].innerHTML;
    $("p:eq(" + contador + ")").slideUp();
    //al ser true tornem a definir al width de pintar lletra a 0
    pasa = true;
    contador++;
  }

}
window.onload = function() {

  console.log(playDemo)
  if (play != null) {
    play.addEventListener("click", function() {
      if (musica.paused) {
        musica.play();
        video.play();
        document.getElementById('jeje').innerHTML = 'pause';
        progressBar.setAttribute('max', musica.duration);
      } else {
        document.getElementById('jeje').innerHTML = 'play_arrow';
        musica.pause();
        video.pause();
      }
      // solament ho volem fer el primer cop que es quan ha de carregar tota la lletra i tal,un altre cop es un problema, d'aqui ve el boolean per solucionar-lo!
      if (haClicat === false) {
        var phrase = document.getElementById('test');
        phrase.value = canso[0].lletra;
        var linia = document.getElementById('actualFrase');
        var phraseColor = document.getElementById('printLetter');
        var place = document.getElementById('placeholder');
        place.innerHTML = canso[0].lletra;
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
      haClicat = true;
    })
  }
  if (restart != null) {
    restart.addEventListener("click", function() {
      musica.currentTime = 0;
      video.currentTime = 0;
      musica.play();
      video.play();
      for(var i=0; i< canso.length;i++){
        $("p:eq(" + i + ")").show();
      }
      var phrase = document.getElementById('test');
        phrase.value = canso[0].lletra;
        var linia = document.getElementById('actualFrase');
        var phraseColor = document.getElementById('printLetter');
        var place = document.getElementById('placeholder');
        place.innerHTML = canso[0].lletra;
        phraseColor.value = canso[0].lletra;
    })
  }

  if (playDemo != null) {
    playDemo.addEventListener("click", function() {
      if (musicaDemo.paused) {

        musicaDemo.currentTime = musicaDemo.duration / 2;
        musicaDemo.play();

        document.getElementById('jeje').innerHTML = 'pause';
      } else {
        document.getElementById('jeje').innerHTML = 'play_arrow';
        musicaDemo.pause();
      }
    })
  }


  if (forward != null) {
    forward.addEventListener("click", function() {
      var index = 0;
      musica.currentTime = musica.currentTime + 5;
      video.currentTime = video.currentTime + 5;
      for (var i = 0; i < canso.length; i++) {
        if (musica.currentTime > canso[i].tempsFinal) {
          index = 0;
        }
      }

    })
  }

  if (rewind != null) {
    rewind.addEventListener("click", function() {
      var index = 0;
      musica.currentTime = musica.currentTime - 5;
      video.currentTime = video.currentTime - 5;
      var equisde = obtenirIndex();
      contador = equisde;
      var phrase = document.getElementById('test');
      var phraseColor = document.getElementById('printLetter');
      var place = document.getElementById('placeholder');
      if (equisde !== 0) {
        phrase.value = canso[equisde - 1].lletra;
        phraseColor.value = canso[equisde - 1].lletra;
        place.innerHTML = canso[equisde - 1].lletra;
      } else {
        phrase.value = canso[equisde].lletra;
        phraseColor.value = canso[equisde].lletra;
        place.innerHTML = canso[equisde].lletra;
      }

      for (var i = 0; i < equisde; i++) {
        $("p:eq(" + i + ")").hide();
      }
      for (equisde; equisde < canso.length; equisde++) {
        $("p:eq(" + equisde + ")").show();
      }
      width = 0;
    })
  }

  function animateWidth() {
    if (!musica.paused && comencar == true) {
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
    if (!musica.paused) {
      var frases = document.getElementsByClassName("comuna");
      //console.log(frases);
      for (var i = 0; i < frases.length; i++) {

        if (i == 0) {
          contador++;

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



  function colorirBarra() {
    if (!musica.paused) {
      progressBar.setAttribute('value', musica.currentTime);
      var min = 0;
      var interval = 0;
      var maxInterval = 60;
      if (musica.currentTime > maxInterval) {
        maxInterval = maxInterval + 60;
        interval = interval + 60;
        min++;
      }

      var d = Number(musica.currentTime);
      var m = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);
      if (s.length == 2) {
        s = "0" + s.toString();
      }
      m = m.toString();
      s = s.toString();
      if (m.length < 1) {
        m = "00";
      }
      if (m.length == 1) {
        m = "0" + m;
      }
      if (s.length < 2) {
        s = "0" + s;
      }

      var temps = m + ":" + s;
      time.innerHTML = temps + "-04:41";
    }
  }

  progressBar.addEventListener("click", function(event) {
    var duration = musica.duration;
    var posCanso = event.offsetX / this.offsetWidth * duration;
    musica.currentTime = posCanso;
    video.currentTime = posCanso;
    haClicat = true;
    var equisde = obtenirIndex();
    contador = equisde;
    var phrase = document.getElementById('test');
    var phraseColor = document.getElementById('printLetter');
    var place = document.getElementById('placeholder');
    if (equisde !== 0) {
      phrase.value = canso[equisde - 1].lletra;
      phraseColor.value = canso[equisde - 1].lletra;
      place.innerHTML = canso[equisde - 1].lletra;
    } else {
      phrase.value = canso[equisde].lletra;
      phraseColor.value = canso[equisde].lletra;
      place.innerHTML = canso[equisde].lletra;
    }

    for (var i = 0; i < equisde; i++) {
      $("p:eq(" + i + ")").hide();
    }
    for (equisde; equisde < canso.length; equisde++) {
      $("p:eq(" + equisde + ")").show();
    }

  });
  progressBar.addEventListener("mousemove", function(event) {
      var duration = musica.duration;
      var posCanso = event.offsetX / this.offsetWidth * duration;
      var m = Math.floor(posCanso % 3600 / 60);
      var s = Math.floor(posCanso % 3600 % 60);
      if (s.length == 2) {
        s = "0" + s.toString();
      }
      m = m.toString();
      s = s.toString();
      if (m.length < 1) {
        m = "00";
      }
      if (m.length == 1) {
        m = "0" + m;
      }
      if (s.length < 2) {
        s = "0" + s;
      }

      var temps = m + ":" + s;
      placholdTime.innerHTML = temps;
    })
    //AKI HI PASAREM EL TEMPS DE CANVIAR DE LINIA ☻
    //setInterval(phraseForward, 10000);
    //AKI HI PASAREM EL TEMPS DE PINTAR

  setInterval(animateWidth, 10);
  setInterval(colorirBarra);

}

function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}

function pintar(element) {
  element.setAttribute("style", "opacity:1;");
}