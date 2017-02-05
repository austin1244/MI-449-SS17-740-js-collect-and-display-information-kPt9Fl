var profile = {
    lastname:"",
    firstname: "",
    descript: "",
    email: "",
    phone:"",
    message : function(){
      return "<h1>Hi, my name is "+this.firstname+" "+this.lastname+"</h1><p>"+this.descript+"</p>"+
             "<p>"+
                  "If you're interested in a date, you can email me at "+
               "<a href=mailto:"+this.email+" target=\"_blank\">"+this.email+"</a>"+
                 " or give me a call at "+
               "<a href=tel:"+this.phone+" target=\"_blank\">"+this.phone+"</a>."+
             "</p>"
    },
    set: function(e){
      var attr = this.dataset.name;
      profile[attr] = e.target.value;
      profile.display();
    },
    display: function(){
       document.getElementById("htmlDisplay").innerHTML = profile.message();
       document.getElementById("codeDisplay").innerHTML = "<xmp>"+profile.message() +"</xmp>";
    }
}

var input = document.getElementsByTagName("input");
for(var i=0; i<input.length; i++){
  input[i].addEventListener("keyup" ,profile.set , false);
}
var textarea = document.getElementsByTagName("textarea");
for(var i=0; i<textarea.length; i++){
  textarea[i].addEventListener("keyup" ,profile.set , false);
}
