import Vue from 'vue'
import Router from 'vue-router'
import Comics from '../components/Comics'
import Comic from '../components/Comic'
import Characters from '../components/Characters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Comics',
      component: Comics
    }, {
      path: '/Comic/:id',
      name: 'Comic',
      component: Comic
    },
    {
      path: '/Characters',
      name: 'Characters',
      component: Characters
    }

  ]
})
