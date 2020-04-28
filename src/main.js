import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Productos from './components/Productos.vue'
import SobreNosotros from './components/SobreNosotros.vue'
import Upload from './components/Upload.vue'
import Login from './components/Login.vue'
import Privado from './components/Privado.vue'
import Registro from './components/Registro.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'

Vue.use(VueRouter)
Vue.use(firestorePlugin)
Vue.use(firebase)

const router = new VueRouter({
  routes: [
    {path:'/home',component:Home},
    {path:'/productos',name:Productos,component:Productos,props: true},
    {path:'/sobrenosotros',component:SobreNosotros},
    {path:'/upload',component:Upload},
    {path:'/login',component:Login},
    {path:'/privado',component:Privado},
    {path:'/registro',component:Registro},
    {path:'/*',component:Home},
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
