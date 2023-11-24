'use strict';

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Scrooge McDuck is the richest duck in the world!',
        scroogeImg: 'img/scrooge.jpg',
        scroogeAlt: 'Scrooge McDuck'
      }
    }
  }).mount('#app')