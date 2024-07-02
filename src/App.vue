<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import ContactModal from "./components/ContactModal.vue";
import FooterContent from "./components/FooterContent.vue";
import { useHead } from '@vueuse/head'

useHead({
  title: "Puppy Love Suites",
  meta: [
    {
      name: 'Dog boarding in Nampa'
    }
  ]
})
</script>

<template>
  <ContactModal />
  <header class="mt-5">
    <NavBar />
  </header>

  <main class="container">
    <RouterView />
  </main>

  <footer class="container-fluid d-flex bg-secondary text-light ">
    <FooterContent />
  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  /* min-height: 256px; */
  margin-top: 32px;
}

h2 {
  background-color: var(--bs-primary);
  color: white;
  /* text-shadow: 1px 1px 2px black; */
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 0px 0px 16px 16px;
}

.icon {
  color: var(--bs-light);
}

.icon:hover {
  color: var(--bs-primary);
  cursor: pointer;
}

.btn-standard {
  background-color: var(--bs-primary);
  border-radius: 18px;
  border: none;
  padding: 8px;
  color: white;
  font-weight: 600;
}

.title-backdrop {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 80%);
}

.glassmorph {
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.15);
  /* border-radius: 16px; */
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(.5px);
  -webkit-backdrop-filter: blur(.5px);
}

.glassmorph-dark {
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  article {
    padding: 0rem 1rem 0rem 1rem;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  article {
    padding: 0rem 3rem 0rem 3rem;
  }

  /* No changes needed */

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  article {
    padding: 0rem 4rem 0rem 4rem;
  }

  /* No changes needed */

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  article {
    padding: 0rem 6rem 0rem 6rem;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  article {
    padding: 0rem 12rem 0rem 12rem;
  }
}
</style>
