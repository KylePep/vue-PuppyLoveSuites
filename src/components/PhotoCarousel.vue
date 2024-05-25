<template>
  <div id="photoCarousel" class="carousel slide" data-bs-ride="true">
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
          <h5 class="d-block">{{ data.captionHeader }}</h5>
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
import { computed } from "vue"
import { HOME_CAROUSEL_ITEMS } from '../../shared/constants/index.js'
import { BOARDING_CAROUSEL_ITEMS } from '../../shared/constants/index.js'
import { useRoute } from "vue-router"
export default {

  setup() {
    const route = useRoute()
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

.captionControl {}


.captionControl>p {
  overflow: hidden;
  max-height: 0;
  // max-height: 0;
  opacity: 0;
}

.captionControl:hover>p {
  max-height: 100vh;
  opacity: 1;
}

// .captionControl:not(:hover)>p {
//   animation: revealBody 1s reverse forwards;
// }

@keyframes revealBody {

  //Grow box
  0% {
    opacity: 0;
    max-height: 0vh;
  }

  25% {
    max-height: 50vh;
  }

  50% {
    max-height: 100vh;
    opacity: 0;
  }

  //Reveal text
  75% {
    opacity: 0.5;
    max-height: 100vh;
  }

  100% {
    opacity: 1;
    max-height: 100vh;
  }
}

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