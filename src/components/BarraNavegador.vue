<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><router-link to="/home">LOGO</router-link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          CATEGORIAS
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#"><router-link to="/productos">Animales</router-link></a>
          <a class="dropdown-item" href="#"><router-link :to="{ path: '/productos', params: { msg } }">Infantil</router-link></a>
          <a class="dropdown-item" href="#">Musica</a>
          <a class="dropdown-item" href="#">Naturaleza</a>
          <a class="dropdown-item" href="#">Peliculas</a>
          <a class="dropdown-item" href="#">Series</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">TODOS</a>
        </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/upload">SUBE TU DISEÑO</router-link></a>
        </li>
        
        <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/sobrenosotros">SOBRE NOSOTROS</router-link></a>
        </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  <ul class="navbar-nav">
    <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/login">ACCEDER</router-link></a>
    </li>
    </ul>
    <ul class="navbar-nav">
    <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/sobrenosotros">CARRITO</router-link></a>
    </li>
    </ul>
</nav>

</template>
<script>
export default {
name: 'BarraNavegador',
data () {
    return {
      msg: `This is Ali's profile`
    }
  }
}
</script>
<style scoped>
</style>
