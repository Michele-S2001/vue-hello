//HELLO VUE

const { createApp } = Vue;

createApp({
  data() {
    return {
      //consegna
      message: 'hello word',
      imgURL: 'https://picsum.photos/500/300',

      // esperimenti
      titleClass: 'custom-title',
      colors: ['bg-blue','bg-green','bg-aqua'],
      num: 0,
      imgBorders: 'b-rad-40'
    }
  },
  // functions
  methods: {
    increaseValue() {
      this.num++
    },

    resetCounter() {
      this.num = 0
    }
  }
}).mount('#app');