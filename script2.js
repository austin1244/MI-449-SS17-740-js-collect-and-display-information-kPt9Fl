(function(){
  var soundMixer = {
    init: function(){
      var button = document.getElementsByTagName("button")
      for(i=0;i<button.length;i++){
        button[i].addEventListener("mouseenter", soundMixer.play , false)
        button[i].addEventListener("click", soundMixer.play , false)
      }
    },
    play: function(e){ 
      var sound = this.dataset.sound
      var audio = document.getElementById(sound)
      audio.play()
    }
  }
  soundMixer.init();
})()
