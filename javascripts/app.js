'use strict'

require('./buttons');
var data = require('../data/data');

var app = new Vue({
  el: '#app',
  data: function (){
    return data
  },
     methods: {
       reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
       }
     }
})
