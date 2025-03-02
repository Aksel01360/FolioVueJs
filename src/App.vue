<template>
  <div id="app">
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/about">À propos</router-link>
      <router-link to="/projects">Projets</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>  <!-- ⬅️ Ici s'affichent les pages dynamiquement -->
  </div>
</template>

