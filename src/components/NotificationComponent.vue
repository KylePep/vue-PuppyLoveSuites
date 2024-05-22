<template>

  <div v-if="!dismiss"
    class="col-12 position-absolute top-0 start-50 z-3 translate-middle bg-success rounded px-5 py-4 text-white">

    <p class="fw-bold fs-3 text-center">
      Puppy Love Suites is now under new ownership!
    </p>

    <p class="mb-0">
      We are in the same gorgeous location with the same heated and
      cooled suites where your dog gets both inside temperature controlled access as well as its own outside run.
      Your
      dog gets play time in the large grass run and personal time with me every day. I have grown up and worked in
      the
      veterinary field for decades and am here to take great care of your dog or dogs while you relax on vacation or
      take a work trip.
    </p>
    <p class="text-center fs-5 py-2 fw-semibold my-3">Puppy Love Suites- love and play with every stay</p>

    <i @click="setDismiss()" class="dismiss mdi mdi-close d-flex justify-content-center fs-1 selectable"></i>

  </div>

</template>


<script>
import { loadState, saveState } from "@/utils/Store.js";
import { onMounted, ref } from "vue";


export default {
  setup() {
    const dismiss = ref(false)
    onMounted(() => {
      const dismissed = loadState('dismissed')
      console.log(dismissed)
      if (dismissed == 'true') {
        dismiss.value = true;
      }
      return dismiss
    })
    return {

      dismiss,
      setDismiss() {
        dismiss.value = true
        saveState('dismissed', 'true')
        return dismiss
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>