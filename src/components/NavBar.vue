<script setup>
// import router from "@/router/index.js";

// import { onMounted, ref } from 'vue';
// import { loadState, saveState } from '../utils/Store.js';
// import Login from './Login.vue';

// const theme = ref(loadState('theme') || 'light')

// onMounted(() => {
//   document.documentElement.setAttribute('data-bs-theme', theme.value)
// })

// function toggleTheme() {
//   theme.value = theme.value == 'light' ? 'dark' : 'light'
//   document.documentElement.setAttribute('data-bs-theme', theme.value)
//   saveState('theme', theme.value)
// }

</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-secondary px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="title d-flex flex-column align-items-center  fw-bold">
        Puppy Love Suites
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'Boarding' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Boarding
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Contact' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Contact Us
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-primary lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul>

      <div>
        <i class="mdi mdi-facebook fs-3 text-light me-2 selectable"></i>
        <i class="mdi mdi-instagram fs-3 text-light me-2 selectable"></i>
        <i class="mdi mdi-paw fs-3 text-light selectable"></i>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.title {
  color: var(--bs-light);
}

.title:hover {
  color: var(--bs-primary)
}

a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-primary);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
  nav {
    height: 64px;
  }
}
</style>
