<template>
  <div class="hello">
    <h1>PRIVADO</h1>
    <div class="card wrap" style="width: 18rem;" v-for="usr in usuario" v-bind:key="usr">
        <h3>{{usr.nombre}} {{usr.apellidos}}</h3>
        <p>{{usr.direccion}} {{usr.poblacion}} {{usr.ciudad}} {{usr.codPost}} </p>
        <p>{{usr.dni}} {{usr.telefono}}</p>   
    </div>
  </div>
</template>

<script>
import {db} from '../db.js'
import firebase from 'firebase'
export default {
  name: 'Privado',
  props: {
  },
  data () {
      return {
        usuario:[],
      }
    },
  beforeMount(){
    var user = firebase.auth().currentUser;
    alert(user.email);
  },
  firestore: {
      usuario:db.collection("usuarios").where("email", "==", "aralo2010@gmail.com"),
    },
}
</script>

<style scoped>

</style>