<script setup>
import { RouterLink } from 'vue-router'
import IconPuppyLoveWords from "./icons/IconPuppyLoveWords.vue";
import KylePepButton from "./KylePepButton.vue";
</script>


<template>
  <div class="row flex-grow-1 align-items-center justify-content-center py-5">
    <div class="col-12 text-center fw-bold fs-4">
      <i class=" d-flex flex-column align-items-center justify-content-center fw-bold pb-2">
        <RouterLink :to="{ name: 'Home' }" class="icon d-flex justify-content-center text-center fw-bold fs-4">
          <IconPuppyLoveWords />
        </RouterLink>
      </i>
    </div>

    <div class="col-6 d-flex justify-content-end px-0">
      <a href="https://www.facebook.com/profile.php?id=61557001554395" target="_blank"
        class="mdi mdi-facebook fs-2 py-1 px-2 icon"></a>
      <a href="https://www.instagram.com/puppy_love_suites?igsh=MTByb2h0czZ3a3YyYQ==" target="_blank"
        class="mdi mdi-instagram fs-2 py-1 px-2 icon"></a>
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

    <div class="col-12  d-flex justify-content-center fw-bold pb-5 pt-3">
      <div class=" d-flex flex-column justify-content-center align-items-center">
        <KylePepButton />
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped></style>