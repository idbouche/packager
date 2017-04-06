'use strict'
var data = require('../data/data');

Vue.component('todo', {
  template: '<button v-on:click="addBtn">Add project</button>' ,
  data: function () {
    return data
  },
  methods: {
   addBtn: function () {
     var nameOfButton =  `number ${this.cont += 1} test`
     this.name = nameOfButton
     this.message = this.message.split('').reverse().join('')
     this.$emit('addBtn')
   }
 }
})

Vue.component('platform', {
  props: ['show'],
  template: '<button v-on:click="addMac">biuld for {{show}}</button>' ,
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
