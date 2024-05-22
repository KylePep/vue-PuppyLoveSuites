<script setup>
import ContactModal from "./ContactModal.vue"
</script>


<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-standard rounded-4 fw-bold py-1 selectable" data-bs-toggle="modal"
    data-bs-target="#contactModal">
    CONTACT INFO
  </button>

  <ContactModal />
</template>


<style lang="scss" scoped>
// .close-button {
//   border: none;
//   background-color: transparent;
//   color: var(--bs-secondary);
// }

// a,
// button {
//   background-color: var(--bs-primary);
//   border-radius: 18px;
//   border: none;
//   padding: 8px;
//   color: white;
//   font-weight: 600;
// }

// .close-button:hover {

//   color: var(--bs-primary)
// }

// ul {
//   list-style-type: none;
// }

// .modal-body>ul>li {
//   margin-top: 1rem;}
.stopit {}
</style>