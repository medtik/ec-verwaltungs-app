import Vue from 'vue'
import Router from 'vue-router'
// Import Routes
import routes from '@/plugins/router/routes/index'

// Install Router Plugin
Vue.use(Router)

// Export Router
export default new Router({ routes })