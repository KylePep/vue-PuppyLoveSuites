<template>

  <div class="modal fade" id="boardingModal" tabindex="-1" aria-labelledby="boardingModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">

        <div class="modal-header d-flex flex-column justify-content-center text-center">
          <i v-if="activeItem.id == 0" class="mdi mdi-paw fs-1"></i>
          <i v-if="activeItem.id == 1" class="mdi mdi-paw fs-1"><span class="mdi mdi-plus-thick"></span></i>
          <i v-if="activeItem.id == 2" class="mdi mdi-calendar-week-begin fs-1"></i>
          <i v-if="activeItem.id == 3" class="mdi mdi-medication fs-1"></i>
          <i v-if="activeItem.id == 4" class="mdi mdi-bone fs-1"></i>
          <h1 class="modal-title" id="boardingModalLabel">{{ activeItem.name }}</h1>
          <h2 class="modal-title" id="boardingModalLabel">{{ activeItem.subName }}</h2>
        </div>

        <div class="modal-body">
          <div class="container-fluid">
            <div class="row py-3">
              <h3 class="col-12 text-center">{{ activeItem.description }}</h3>
            </div>
            <div class="row fw-semibold fs-5">
              <div class="col-6 text-center">Price: {{ activeItem.price }}</div>
              <div class="col-6">
                <ul>
                  <li class="" v-for="detail in activeItem.details" :key="detail">{{ detail }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer justify-content-center">
          <button class=" fs-1 mdi mdi-close-circle-outline" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

      </div>
    </div>
  </div>

</template>


<script>
import { AppState } from "@/AppState.js";
import { computed } from "vue";

export default {
  setup() {
    return {
      AppState: computed(() => AppState),
      activeItem: computed(() => AppState.activeItem)
    }
  }
}
</script>


<style lang="scss" scoped>
h2 {
  background-color: transparent;
  color: black;
}

button {
  // width: 56px;
  // height: 56px;
  // border-radius: 50%;
  border: none;
  background-color: transparent;
  color: var(--bs-secondary);
}

button:hover {

  color: var(--bs-primary)
}

.modal-content {
  // min-height: 50vh;
}
</style>