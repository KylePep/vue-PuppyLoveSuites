<template>

  <div v-if="!dismiss"
    class="col-12 position-absolute top-0 start-50 z-3 translate-middle bg-success rounded px-5 py-4 text-white">

    <div class="d-flex justify-content-between">
      <p class="fw-bold fs-3 text-center">
        Puppy Love Suites is now under new ownership!
      </p>

      <i @click="setDismiss()" class="dismiss mdi mdi-close "></i>

    </div>

    <p class="mb-0">
      We are in the same gorgeous location with the same heated and
      cooled suites where your dog gets both inside temperature controlled access as well as its own outside run.
      Your
      dog gets play time in the large grass run and personal time with me every day. I have grown up and worked in
      the
      veterinary field for decades and am here to take great care of your dog or dogs while you relax on vacation or
      take a work trip.
    </p>
    <p class="text-center fw-semibold my-3">Puppy Love Suites- love and play with every stay</p>

  </div>

</template>


<script>
import { ref } from "vue";


export default {
  setup() {
    const dismiss = ref(false)
    return {
      dismiss,
      setDismiss() {
        dismiss.value = true
        return dismiss
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>