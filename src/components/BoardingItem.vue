<template>
  <div @click="setActiveBoardingItem(props.id)" class="card r h-100 bg-primary rounded-4 p-1 text-white shadow-sm"
    data-bs-toggle="modal" data-bs-target="#boardingModal" typeof="button">
    <div class="flex-grow-1 w-100 d-flex flex-column justify-content-around align-items-center p-2 selectable">

      <div class="d-flex flex-column w-100 border-bottom border-white border-3 pb-3 ">
        <i class="text-center" :class="[props.size == 'lg' ? 'fs-1' : 'fs-3']">
          <slot name="icon"></slot>
        </i>
        <h4 class="text-center" :class="[props.size == 'lg' ? 'fs-3 fw-bold' : 'fw-semibold fs-6 fs-md-4']">
          <slot name="heading"></slot>
        </h4>
      </div>
      <div class="details py-2">
        <h5>
          <slot></slot>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { BOARDING_ITEMS } from '../../shared/constants/index.js'

export default {
  props: { size: String, id: String },
  setup(props) {
    return {
      setActiveBoardingItem(id) {
        AppState.activeItem = BOARDING_ITEMS[id]
      },
      props
    }
  }
}
</script>

<style scoped>
.card>div {
  border: solid white;
  border-radius: 12px;
}

.card:hover {
  cursor: pointer;

  >div {
    border-color: white;
  }
}
</style>
