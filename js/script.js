//HELLO VUE

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'hello word',
      imgURL: 'https://picsum.photos/400/200'
    }
  },
}).mount('#app');
