<template>
  <!-- Barra de navegación -->
  <nav class="navbar navbar-expand-lg w-100">
    <div class="container-fluid">


      <!-- Botón de hamburguesa para dispositivos móviles -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <!-- Contenido de la barra de navegación -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Elemento "Inicio" -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>

          <!-- Elemento "Parques" con menú desplegable -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Parques
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <!-- Elementos del menú desplegable (nombres de parques) -->
              <li class="dropdown-item">
                <router-link to="/carolina" class="dropdown-link">La Carolina</router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/bicentenario" class="dropdown-link">Bicentenario</router-link>
              </li>
            </ul>
          </li>
        </ul>

      </div>
      <div id="titulo" class="ms-auto">
        <!-- Logo (opcional) -->
        <h5>EN BUSCA DEL DEPORTE</h5>
        <img src="@/assets/img/logo.png" alt="Logo" width="60" height="50"
          style="margin-right: 5px; margin-left: 10px;">

      </div>
    </div>

  </nav>

</template>

<script>

</script>

<style scoped>
#titulo {
  font-family: 'Roboto Condensed';
  color: black;
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: end;


}

.navbar {
  background-color: #276E56;
  /*padding: 10px 0;*/
}

.navbar-brand {
  font-size: 20px;

}

.navbar-toggler {
  background-color: #D96C23;
}

.navbar-toggler-icon {
  background-color: #D96C23;
}

.navbar-nav .nav-link {
  font-family: 'Roboto Condensed';
  color: #e08930 ;
  font-weight: bold;
  font-size: 19px;
}

.dropdown-menu {
  background-color: #D96C23;
}

.dropdown-item {
  color: #D96C23;
}

.dropdown-item:hover {
  background-color: #D96C23;
}

.dropdown-link {
  color: black !important;
  text-decoration: none;
  font-size: 17px;
}

.dropdown-link:hover {
  color: #31A17D !important;
}
</style>