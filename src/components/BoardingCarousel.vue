<template>
  <div id="photoCarousel" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner rounded border border-4 border-primary">
      <div class="carousel-item active" data-bs-interval="7000">
        <img
          src="https://images.unsplash.com/photo-1612543053140-e54f6cc284ac?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block rounded glassmorph fadeIn">
          <h5>Randel and the boys</h5>
          <p>Randel and the boys enjoying group play time.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="7000">
        <img
          src="https://images.unsplash.com/photo-1592271891745-663a32b11d50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block rounded glassmorph fadeIn">
          <h5>Triscuit</h5>
          <p>Triscuit will barf if they have human food. (including Triscuits).</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1588207305997-1b871d05bc66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="d-block w-100" alt="..." data-bs-interval="7000">
        <div class="carousel-caption d-none d-md-block rounded glassmorph fadeIn">
          <h5>Where are they now?</h5>
          <p>Brandon would be voted off the island by episode 7.</p>
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
export default {
  setup() {

    return {

    }
  }
}
</script>


<style lang="scss" scoped>
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