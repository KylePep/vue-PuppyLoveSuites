<script setup>
import { loadState } from "@/utils/Store.js";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";


const theme = ref(loadState('theme') || 'light')

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-secondary px-3">
    <RouterLink class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="title d-flex flex-column align-items-center  fw-bold">
        Puppy Love Suites
      </div>
    </RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <RouterLink :to="{ name: 'Boarding' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Boarding
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'Contact' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Contact Us
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'About' }" class="btn text-primary lighten-30 selectable text-uppercase">
            About
          </RouterLink>
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

.navbar-nav .RouterLink-exact-active {
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
