'use strict'
var data = require('../data/data');

Vue.component('shows', {
  template: '<input v-on:change="addbtn" type="file" id="fileshow" webkitdirectory>' ,
  data: function () {
    return data
  },
  methods: {
   addbtn: function (event) {
     let files = event.target.files;
     this.path = files[0].path
     console.log(files[0].path, "path");

     var nameOfButton =  `number ${this.cont += 1} test`
     this.name = nameOfButton
     this.message = this.message.split('').reverse().join('')
     this.$emit('addbtn')
   }
 }
})

Vue.component('platformmac', {
  props: ['show'],
  template: '<button v-on:click="buildMac"> <i class="fa fa-apple" aria-hidden="true"></i> Biuld for {{show}}</button>' ,
  data: function () {
    return data
  },

  methods: {
   buildMac: function () {
     console.log(this.show);
     console.log(this.path, "path of folder");
     var nameOfButton =  `number ${this.cont += 1} test`
     this.name = nameOfButton
     this.message = this.message.split('').reverse().join('')
     this.$emit('buildMac')
   }
 },
})
Vue.component('platformlinux', {
  props: ['show'],
  template: '<button v-on:click="addMac"> <i class="fa fa-linux" aria-hidden="true"></i> Biuld for {{show}}</button>' ,
  data: function () {
    return data
  },

  methods: {
   addMac: function () {
     console.log(this.show);
     var nameOfButton =  `number ${this.cont += 1} test`
     this.name = nameOfButton
     this.message = this.message.split('').reverse().join('')
     this.$emit('addMac')
   }
 },
})
Vue.component('platformwin', {
  props: ['show'],
  template: '<button v-on:click="addMac"> <i class="fa fa-windows" aria-hidden="true"></i> Biuld for {{show}}</button>' ,
  data: function () {
    return data
  },

  methods: {
   addMac: function () {
     console.log(this.show);
     var nameOfButton =  `number ${this.cont += 1} test`
     this.name = nameOfButton
     this.message = this.message.split('').reverse().join('')
     this.$emit('addMac')
   }
 },
})
