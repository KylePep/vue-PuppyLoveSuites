<template>
  <div id="photoCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">

      <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>

      <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>

      <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>

    </div>

    <div class="carousel-inner rounded border border-4 border-primary">

      <div v-for="data, x in carouselData" :key="x" class="carousel-item" :class="[x == 0 ? 'active' : '']"
        data-bs-interval="7000">
        <img :src="data.img" :alt="data.captionHeader" class="d-block w-100" :title="data.captionHeader + ' Slide ' + x"
          :style="{ objectPosition: '50%' + data.bottom + '%' }">
        <div class="carousel-caption captionControl rounded glassmorph-dark fadeIn p-2">
          <i
            class="expand-icon  mdi mdi-arrow-expand flex-grow-1 mx-2 my-1 p-0 text-end top-0 end-0 position-absolute"></i>
          <h5 class="d-block px-4 px-sm-0">{{ data.captionHeader }}</h5>
          <p class="">{{ data.captionBody }}</p>
        </div>
      </div>

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#photoCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#photoCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>
</template>


<script>
// import { AppState } from '../AppState'
import { computed, onMounted } from "vue"
import { HOME_CAROUSEL_ITEMS } from '../../shared/constants/index.js'
import { BOARDING_CAROUSEL_ITEMS } from '../../shared/constants/index.js'
import { useRoute } from "vue-router"
import { Carousel } from "bootstrap"
export default {

  setup() {
    const route = useRoute()
    onMounted(() => {
      Carousel.getOrCreateInstance('#photoCarousel').ride = 'carousel'
    })
    return {

      carouselData: computed(() => {
        if (route.name == 'Home') {
          return HOME_CAROUSEL_ITEMS;
        } else {
          return BOARDING_CAROUSEL_ITEMS;
        }
      })

    }
  }
}
</script>


<style lang="scss" scoped>
img {
  object-fit: contain;
}


.expand-icon {
  pointer-events: none;
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.captionControl {}


.captionControl>p {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.captionControl:hover {
  p {
    max-height: 100vh;
    opacity: 1;
  }

  ;

  .expand-icon {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  ;
}

// .captionControl:hover>p {
//   max-height: 100vh;
//   opacity: 1;
// }

.fadeIn {
  animation: fadeIn 2s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  25% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

}

img {
  height: 312px;
  object-position: center;
  object-fit: cover;

}
</style>