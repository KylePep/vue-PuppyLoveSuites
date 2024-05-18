<template>
  <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#boardingModal">
    Launch demo modal
  </button> -->

  <!-- Modal -->
  <div class="modal fade" id="boardingModal" tabindex="-1" aria-labelledby="boardingModalLabel" aria-hidden="true">
    <div
      class="modal-content modal-dialog p-3 d-flex flex-column justify-content-between align-items-center bg-light border border-primary border-5">
      <h1>Item Title</h1>
      <div>
        Item Content
      </div>
      <button class=" fs-1 mdi mdi-close-circle-outline" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <!-- <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="boardingModalLabel">Item Title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Item Content
        </div>
      </div>
    </div> -->
  </div>
</template>


<script>
export default {
  setup() {
    return {}
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