'use strict'

require('./buttons');
var data = require('../data/data');
var exec = require('child_process').exec;
var path = require('path')


var app = new Vue({
  el: '#app',
  data: function (){
    return data
  },
     methods: {
       reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
          console.log(this.path);
       }
     }
})

window.onload = function() {
  var file = document.getElementById("filedragdrop");
  file.onchange = function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var files = e.target.files;
    console.log(files[0].path);
    var dist = files[0].path
    function puts(error, stdout, stderr) {
      if (error) {
        console.log(error)
      } else {
        console.log("ok");
      }
     }
     var sourc = path.join(__dirname, 'sourc/package.json')
    var cmd = `cp ${sourc} ${dist}`
    exec(cmd, puts);

  }
}
