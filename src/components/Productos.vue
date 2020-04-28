<template>
  <div class="hello">
    <h1>COMPONENTE PRODUCTOS</h1>
  <div class="d-flex">
    <div class="card wrap" style="width: 18rem;" v-for="producto in productos" v-bind:key="producto">
    <img v-bind:src=" producto.img + '.jpg'" alt="img Producto" height="42" width="42">
        <h3>{{producto.nombre}}</h3>
        <p>{{producto.descripcion}}</p>
        <p>{{producto.precio}}</p>   
    </div>
  </div>
  <div>
        {{ welcome }}
    </div>
  </div>
</template>

<script>
import {db} from '../db.js'
export default {
  name: 'Productos',
  props: ['msg'],
  data () {
      return {
        productos:[],
        welcome: 'This is your profile'
      }
    },
  mounted() {
        if (this.msg) {
            this.welcome = this.msg    
        }

    },  
  firestore: {
      productos:db.collection("productos").where("categoria", "==", "animales"),
    },
  
}


</script>

<style scoped>

</style>