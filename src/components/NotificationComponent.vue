<template>

  <!-- <div v-if="!dismiss" class="col-12 bg-success rounded px-5 py-4 text-white"> -->
  <div class="col-12 bg-success rounded px-5 py-4 text-white mt-5">

    <div class="row">

      <div class=" col-12 fw-bold fs-3 text-center">
        Puppy Love Suites is now
        <p class="text-uppercase">under new ownership!</p>
      </div>

      <div
        class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto mb-0 py-5 border-3 border-top border-bottom px-0 px-sm-5 text-center">
        <p>
          We are in the same gorgeous location with the same heated and
          cooled suites where your dog gets both inside temperature controlled access as well as its own outside run.
        </p>
        <p>
          Your
          dog gets play time in the large grass run and personal time with me every day.
          I have grown up and worked in
          the
          veterinary field for decades and am here to take great care of your dog or dogs while you relax on vacation or
          take a work trip.

        </p>
      </div>
      <p class=" col-12 text-center fs-5 py-2 fw-semibold my-3">Puppy Love Suites <br> love and play with every stay</p>

      <i @click="setDismiss()" class="dismiss mdi mdi-close d-flex justify-content-center fs-1 selectable"></i>

    </div>

  </div>

</template>


<script>
import { loadState, saveState } from "@/utils/Store.js";
import { onMounted, ref } from "vue";


export default {
  setup() {
    const dismiss = ref(false)

    function checkDateAndSetDismiss() {
      const hardcodedDate = new Date('2024-05-022');

      // Add 3 months to the hardcoded date
      const futureDate = new Date(hardcodedDate);
      futureDate.setMonth(futureDate.getMonth() + 3);

      // Get today's date
      const today = new Date();

      // Check if today's date is greater than the hardcoded date + 3 months
      if (today > futureDate) {
        dismiss.value = true;
      }

    }

    onMounted(() => {
      checkDateAndSetDismiss()

      const dismissed = loadState('dismissed')
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