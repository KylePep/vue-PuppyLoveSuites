<template>
  <div v-if="isSmallScreen" class="d-flex flex-column justify-content-center align-items-center">
    <div v-for="day in longDays" :key="day"
      :class="[day.split('|')[0] == 'Sunday' || day.split('|')[0] == 'Saturday' ? 'bg-light' : 'bg-white', day.split('|')[0] == 'Sunday' ? 'border-bottom-1 rounded-top-1' : 'border-top-0', day.split('|')[0] == 'Saturday' ? 'rounded-bottom-1' : '']"
      class="d-flex flex-column border border-3 border-primary w-100 text-center">
      <p class="bg-primary text-white fw-bold px-2 py-2 mb-0">{{ day.split('|')[0] }}</p>

      <div class="d-flex flex-row justify-content-center py-2">

        <div class="px-2 fw-semibold">{{
    day.split('|')[1].split('-')[0] }}</div>
        <i v-if="day != 'Sunday|Closed'" class="fw-semibold">-</i>
        <div v-if="day != 'Sunday|Closed'" class="px-2 fw-semibold">{{ day.split('|')[1].split('-')[1] }}</div>

      </div>

    </div>

  </div>

  <div v-else class="d-flex flex-column flex-grow-1 align-items-center">
    <div class="d-flex flex-row w-100">
      <div v-for="day in longDays" :key="day"
        :class="[day.split('|')[0] == 'Sunday' || day.split('|')[0] == 'Saturday' ? 'bg-light' : 'bg-white', day.split('|')[0] == 'Sunday' ? 'border-start-2 rounded-start' : 'border-start-0', day.split('|')[0] == 'Saturday' ? 'rounded-end' : '']"
        class="d-flex flex-column flex-grow-1 border border-3 border-primary text-center">
        <div class="bg-primary text-white fw-bold fs-5 px-2 py-2">{{ day.split('|')[0] }}</div>

        <div class="d-flex flex-column flex-grow-1 ">
          <div class="px-2 pt-2 fw-semibold">{{
    day.split('|')[1].split('-')[0] }}</div>
          <i v-if="day != 'Sunday|Closed'" class="fw-semibold">-</i>
          <div v-if="day != 'Sunday|Closed'" class="px-2 pb-2 fw-semibold">{{ day.split('|')[1].split('-')[1] }} </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {
      screenWidth: window.innerWidth,
      // shortDays: ["Sun|Closed", "Mon|9AM-6PM", "Tue|9AM-6PM", "Wed|9AM-6PM", "Thu|9AM-6PM", "Fri|9AM-6PM", "Sat|9AM-6PM"],
      longDays: ["Sunday|Closed", "Monday|9AM-6PM", "Tuesday|9AM-6PM", "Wednesday|9AM-6PM", "Thursday|9AM-6PM", "Friday|9AM-6PM", "Saturday|9AM-6PM"]
    }
  },
  computed: {
    isSmallScreen() {
      return this.screenWidth < 992;
    }
  },
  mounted() {
    // Update screenWidth when the window is resized
    window.addEventListener('resize', this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    }
  },
  beforeUnmount() {
    // Remove event listener to prevent memory leaks
    window.removeEventListener('resize', this.updateScreenWidth);
  }
}
</script>


<style lang="scss" scoped></style>