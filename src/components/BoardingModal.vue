<template>

  <div class="modal fade" id="boardingModal" tabindex="-1" aria-labelledby="boardingModalLabel" aria-hidden="true">
    <div
      class="modal-content modal-dialog p-3 d-flex flex-column justify-content-between align-items-center bg-light border border-primary border-5">
      <h1>{{ AppState.activeItem.name }}</h1>
      <div>
        Item Content
      </div>
      <button class=" fs-1 mdi mdi-close-circle-outline" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
  </div>

</template>


<script>
import { AppState } from "@/AppState.js";
import { computed } from "vue";

export default {
  setup() {
    return {
      AppState: computed(() => AppState)
    }
  }
}
</script>


<style lang="scss" scoped>
button {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background-color: var(--bs-primary);
  color: var(--bs-secondary);
}

button:hover {

  color: var(--bs-light)
}

.modal-content {
  height: 50vh;
}
</style>