import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// new Vue({
//   el: '#app',
//   router: router,
//   template: '<App/>',
//   components: {
//     App
//   }
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
