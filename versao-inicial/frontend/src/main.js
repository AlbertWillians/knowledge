import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFsYmVydCBXaWxsaWFucyBBcnJlYm9sYSIsImVtYWlsIjoiYWxiZXJ0d2lsbGlhbnNAaG90bWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjIyODE3NzM1LCJleHAiOjE2MjMwNzY5MzV9.3lIWIT2qI7JWW9fIZf9ZFYh1uTKuh-ReS8HDtTb6RpE'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')