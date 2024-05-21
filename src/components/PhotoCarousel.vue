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
        <img :src="data.img" :alt="data.captionHeader" class="d-block w-100">
        <div class="carousel-caption captionControl rounded glassmorph fadeIn">
          <h5 class="d-block">{{ data.captionHeader }}</h5>
          <p class="">{{ data.captionBody }}</p>
        </div>
      </div>
      <!-- 
      <div class="carousel-item active" data-bs-interval="7000">
        <img
          src="https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block rounded glassmorph fadeIn">
          <h5>Randel and the boys</h5>
          <p>Randel and the boys enjoying group play time.</p>
        </div>
      </div>

      <div class="carousel-item" data-bs-interval="7000">
        <img
          src="https://plus.unsplash.com/premium_photo-1664371206863-048681ac32c4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block rounded glassmorph fadeIn">
          <h5>Triscuit</h5>
          <p>Triscuit will barf if they have human food. (including Triscuits).</p>
        </div>
      </div>

      <div class="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1556866261-8763a7662333?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="d-block w-100" alt="..." data-bs-interval="7000">
        <div class="carousel-caption d-none d-md-block rounded glassmorph fadeIn">
          <h5>Where are they now?</h5>
          <p>Brandon would be voted off the island by episode 7.</p>
        </div>
      </div> -->

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
.captionControl {}


.captionControl>p {
  overflow: hidden;
  max-height: 0;
  font-size: 0;
  transition: max-height 0.5s ease, font-size 0.5s ease;
}

.captionControl:hover>p {
  max-height: 100px;
  /* Or a fixed height if you prefer */
  font-size: 16px;
  /* Adjust the font size as needed */
}

// .captionControl {
//   >p {
//     display: none;
//     font-size: 0;
//   }

// }

// .captionControl:hover {
//   >p {
//     // animation: name duration timing-function delay iteration-count direction fill-mode;
//     animation: revealBody 2s ease 0s 1;
//     display: block;
//   }
// }

@keyframes revealBody {
  0% {
    font-size: 1px;
  }

  50% {
    height: 8px
  }

  100% {
    height: 16px
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