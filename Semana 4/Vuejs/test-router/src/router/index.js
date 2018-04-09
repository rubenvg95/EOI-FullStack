import Vue from 'vue'
import Router from 'vue-router'
import General from '../components/General'
import Clientes from '../components/Clientes'
import Campanas from '../components/Campanas'
import Configurar from '../components/Configurar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/General',
      name: 'General',
      component: General
    },
    {
      path: '/Clientes',
      name: 'Clientes',
      component: Clientes
    }, {
      path: '/Campanas',
      name: 'Campanas',
      component: Campanas
    }, {
      path: '/Configurar',
      name: 'Configurar',
      component: Configurar
    }
  ]
})
