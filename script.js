var profile = {
  lastName: '',
  firstName: '',
  description: '',
  email: '',
  phone: '',
  message: function () {
    return '<h1>Hi, my name is ' + this.firstName + ' ' + this.lastName + '</h1><p>' + this.description + '</p>' +
             '<p>' +
                  'If you\'re interested in a date, you can email me at ' +
               '<a href=mailto:"' + this.email + '" target=\'_blank\'>' + this.email + '</a>' +
                 ' or give me a call at ' +
               '<a href=tel:"' + this.phone + '" target=\'_blank\'>' + this.phone + '</a>.' +
             '</p>'
  },
  set: function (e) {
    var attr = this.dataset.name
    profile[attr] = e.target.value
    profile.display()
  },
  display: function () {
    document.getElementById('htmlDisplay').innerHTML = profile.message()
    document.getElementById('codeDisplay').textContent = profile.message()
  }
}

var input = document.querySelectorAll('[data-name]')
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener('input', profile.set)
}
