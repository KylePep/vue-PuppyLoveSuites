<template>
  <div @click="setActiveBoardingItem(props.id)" class="card r h-100 bg-primary rounded p-1 text-white"
    data-bs-toggle="modal" data-bs-target="#boardingModal" typeof="button">
    <div class="flex-grow-1 w-100 d-flex flex-column justify-content-around align-items-center p-2 selectable">

      <div class="d-flex flex-column border-bottom border-secondary border-3 pb-3 ">
        <i class="text-center" :class="[props.size == 'lg' ? 'fs-1' : 'fs-3']">
          <slot name="icon"></slot>
        </i>
        <div class="text-center" :class="[props.size == 'lg' ? 'fs-3 fw-bold' : 'fw-semibold']">
          <slot name="heading"></slot>
        </div>
      </div>
      <div class="details">
        <h3>
        </h3>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import AppState from '../../src/AppState.js'
import BOARDING_ITEMS from '../../shared/constants/index.js'

export default {
  props: { size: String },
  setup(props) {
    return {
      setActiveBoardingItem() {
        AppState.activeItem = BOARDING_ITEMS[0]

      },
      props
    }
  }
}
</script>

<style scoped>
.card>div {
  border: solid var(--bs-light) 4px;
  border-radius: 4px;
}

.card:hover {
  cursor: pointer;

  >div {
    border-color: white;
  }
}
</style>
