<script setup>
import BoardingCarousel from "../components/BoardingCarousel.vue";


</script>

<template>
  <div class="Hero row d-flex flex-column justify-content-center ">
    <h1 class="col-12 d-flex glassmorph text-white text-center flex-column justify-content-center flex-grow-1 mb-0">
      Boarding
    </h1>
  </div>
  <div class="row">
    <div class="col-12 px-0 text-center">
      <h2>Sweet Suites!</h2>
    </div>
  </div>

  <article class="row my-3 g-3">
    <div class="col-12">
      <h3 class="text-center bg-secondary text-light px-2 py-4 rounded">
        In order to book your dogs boarding please call <br>
        (208) 353-5939
      </h3>
    </div>

    <div class="col-12">
      <h3 class="fw-bold">Dog Boarding</h3>

      Treat your furry friend to a luxurious getaway at Puppy Love Suites. Our spacious and comfortable suites provide
      the perfect home away from home for dogs of all shapes and sizes. // Heated and cooled suites.
    </div>

    <i class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </i>

    <div class="col-12">
      <div class="row g-2">
        <h3 class="col-12">PRICING</h3>


        <div class="col-12 order-2 order-lg-1 col-lg-6 ">

          <table class="table border border-primary border-4 rounded my-0">
            <thead class="">
              <th scope="col">Item</th>
              <th scope="col">Rate</th>
              <th scope="col">Description</th>
            </thead>
            <tbody>

              <tr class="table-primary">
                <td scope="row">Single Dog</td>
                <td>$40 per night</td>
                <td>
                  <ul>
                    <li>One Suite</li>
                    <li>One Dog</li>
                  </ul>
                </td>
              </tr>

              <tr class="table-light">
                <td scope="row">Additional dog(s)</td>
                <td>$33 per dog, per night</td>
                <td>
                  <ul>
                    <li>One Suite</li>
                    <li>more than one dog</li>
                    <li>must get along</li>
                  </ul>
                </td>
              </tr>

              <tr class="table-primary">
                <td scope="row">Sunday and after hours pick up or drop off</td>
                <td>$50</td>
                <td>
                  <ul>
                    <li>Must call ahead of time</li>
                  </ul>
                </td>
              </tr>

              <tr class="table-light">
                <td scope="row">Medication administration</td>
                <td>$3 per day</td>
                <td>
                  <ul>
                    <li>Medication is not provided</li>
                    <li>Must be able to provide dosage and frequency</li>
                  </ul>
                </td>
              </tr>

              <tr class="table-primary">
                <td scope="row">Food provided by Puppy Love Suites</td>
                <td>$5 per day</td>
                <td>
                  <ul>
                    <li>X dog foods to choose from</li>
                    <li>Brands are selected by Puppy Love Suites</li>
                    <li>It is encouraged to provide your dogs regular food</li>
                  </ul>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        <div class="col-12 d-flex order-1 order-lg-2 col-lg-6 ">
          <div class="boarding-image border border-primary border-4 rounded flex-grow-1">
            <h4 class="bg-primary text-white py-4 text-center">Your Dogs Vacation Starts Here!</h4>

          </div>
        </div>

      </div>

    </div>

    <i class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </i>

    <div class="col-12">
      <div class="row">
        <h3 class="col-12">
          Suites
        </h3>
      </div>
      <div class="col-12">
        <BoardingCarousel />
      </div>

      <div class="col-12 mt-3">
        <p>Heated</p>
        <p>Cooled</p>
        <p>Private</p>
        <p>Bed provided</p>
      </div>

    </div>

    <i class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </i>

    <div class="col-12">
      <h4>FAQ</h4>
      <div class="row">

        <div class="col-12">
          <h5>What about the poop?</h5>
          <p>It gets cleaned up.</p>
        </div>

        <div class="col-12">
          <h5>What about cats?</h5>
          <p>What about cats.</p>
        </div>

        <div class="col-12">
          <h5>Do you have a good banana bread recipe?</h5>
          <p>I do but I won't tell you.</p>
        </div>

      </div>
    </div>

    <div class="col-12">
      <ContactUs />
    </div>

  </article>

</template>





<style lang="scss" scoped>
article {
  margin: 2rem 0rem;

  >div {
    margin: 2rem 0rem;
  }
}

.Hero {
  background-image: url(https://images.unsplash.com/photo-1518640165980-d3e0e2aa6c1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-position: 0% 80%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 20rem;
}

.boarding-image {
  background-image: url(https://images.unsplash.com/photo-1565674244283-993fb27a215f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--bs-secondary);
  min-height: 512px;
}

.separationMargin {
  margin: 1.5rem 0 1.5rem 0;
}
</style>