import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFsYmVydCBXaWxsaWFucyBBcnJlYm9sYSIsImVtYWlsIjoiYWxiZXJ0d2lsbGlhbnNAaG90bWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjIzMDg3MjM5LCJleHAiOjE2MjMzNDY0Mzl9.LWPJa--PTwoauGNaxF4xAoQCQlK6c8zMvnzRD7IWyeI'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')