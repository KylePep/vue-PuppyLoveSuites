<script setup>
import { loadState } from "@/utils/Store.js";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import NotificationComponent from "./NotificationComponent.vue";


const theme = ref(loadState('theme') || 'light')

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})
function closeNavbar() {
  const navToggle = document.getElementById('navbarText');
  if (navToggle.classList.contains('show')) {
    navToggle.classList.replace('collapse', 'collapsing')
    navToggle.classList.remove('show')
  }
}

</script>

<template>
  <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-secondary px-3">
    <RouterLink class="navbar-brand d-flex" :to="{ name: 'Home' }">

      <div class="title d-flex flex-column align-items-center justify-content-center fw-bold">
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
          <RouterLink @click="closeNavbar()" :to="{ name: 'Boarding' }" class="btn selectable-nav text-uppercase">
            Boarding
          </RouterLink>
        </li>
        <li>
          <RouterLink @click="closeNavbar()" :to="{ name: 'Contact' }" class="btn selectable-nav text-uppercase">
            Contact Us
          </RouterLink>
        </li>
        <li>
          <RouterLink @click="closeNavbar()" :to="{ name: 'About' }" class="btn selectable-nav text-uppercase">
            About
          </RouterLink>
        </li>
      </ul>

      <div class="d-flex align-items-baseline">
        <a href="https://www.facebook.com/profile.php?id=61557001554395" target="_blank"
          class="mdi mdi-facebook fs-3 me-2 icon"></a>
        <a href="https://www.instagram.com/puppy_love_suites?igsh=MTByb2h0czZ3a3YyYQ==" target="_blank"
          class="mdi mdi-instagram fs-3 me-2 icon"></a>
        <button type="button" class="btn mdi mdi-paw fs-3 icon m-0 p-0" data-bs-toggle="modal"
          data-bs-target="#contactModal">
        </button>
      </div>
    </div>
  </nav>
  <NotificationComponent />
</template>

<style scoped>
.title {
  color: var(--bs-light);
}

.title:hover {
  color: var(--bs-primary);
  /* color: var(--bs-secondary); */
}

.selectable-nav {
  color: var(--bs-primary);
}

.selectable-nav:hover {
  color: var(--bs-light);
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
    /* height: 98px; */
  }
}
</style>
