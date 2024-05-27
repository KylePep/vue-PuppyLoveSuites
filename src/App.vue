<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import IconPuppyLoveWords from './components/icons/IconPuppyLoveWords.vue'
import ContactModal from "./components/ContactModal.vue";
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
  <header>
    <NavBar />
  </header>

  <main class="container mt-5">
    <RouterView />
  </main>

  <footer class="container-fluid d-flex bg-secondary text-light ">
    <div class="row flex-grow-1 align-items-center justify-content-center py-5">
      <div class="col-12 text-center fw-bold fs-4">
        <RouterLink :to="{ name: 'Home' }" class="d-flex justify-content-center text-light text-center fw-bold fs-4">
          <i class="icon d-flex flex-column align-items-center justify-content-center fw-bold pb-2">
            <IconPuppyLoveWords />
          </i>
        </RouterLink>
      </div>

      <div class="col-6 d-flex justify-content-end px-0">
        <a href="https://www.facebook.com/profile.php?id=61557001554395" target="_blank"
          class="mdi mdi-facebook fs-2 py-1 px-2 icon"></a>
        <a href="https://www.instagram.com/puppy_love_suites?igsh=MTByb2h0czZ3a3YyYQ==" target="_blank"
          class="mdi mdi-instagram fs-2 py-1 px-2 icon"></a>
        <!-- <i class="  icon"></i> -->
        <button type="button" class="btn mdi mdi-paw icon fs-2 py-1 px-2" data-bs-toggle="modal"
          data-bs-target="#contactModal">
        </button>
      </div>

      <div class="col-6 d-flex justify-content-start px-0">
        <a href="tel:2083535939" class="fs-6 btn btn-standard px-3 py-2 mb-0 selectable">( 208 ) 353-5939</a>
      </div>

      <div class="col-12 py-2 ">
        <div class="row position-relative">
          <i class="d-none d-sm-block text-center position-absolute py-1" style="pointer-events: none;">|</i>
          <div class="col-12 col-sm-6 text-center text-sm-end ">
            <a href="https://maps.app.goo.gl/3fF7Fq8c6oAueQsu5" target="_blank"
              class="btn icon lighten-30 text-uppercase">
              10330 Lake Shore Dr, Nampa, ID 83686
            </a>
          </div>

          <div class="col-12 col-sm-6 text-center text-sm-start">
            <a href="mailto:puppylovesuites@gmail.com"
              class="btn icon lighten-30 text-uppercase">puppylovesuites@gmail.com</a>
          </div>
        </div>

      </div>

      <div class="col-12">
        <p class=" text-center">
          © 2024 Puppy Love Suites. All Rights Reserved.
        </p>
      </div>
    </div>
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
