<script setup>
import { Modal } from "bootstrap";
import { useRouter } from "vue-router";

const hours = ["Sunday|Closed", "Monday|8AM-6PM", "Tuesday|8AM-6PM", "Wednesday|8AM-6PM", "Thursday|8AM-6PM", "Friday|8AM-6PM", "Saturday|9AM-12PM",]

const router = useRouter();

const closeModal = () => {
  Modal.getOrCreateInstance('#contactModal').hide()
  router.push({ name: 'Contact' });
  window.scrollTo(0, 0);
};

</script>

<template>
  <!-- Modal -->
  <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">

        <div class="modal-header justify-content-center">
          <h1 class="modal-title fw-bold fs-5 " id="contactModalLabel">
            <button @click="closeModal" class="btn px-2 py-1 rounded selectable text-uppercase fs-3 fw-bold">
              CONTACT US
            </button>
          </h1>
        </div>

        <div class="modal-body container-fluid">

          <div class="row g-3">

            <div class="col-12 d-flex flex-column justify-content-center">
              <h3 class="mdi mdi-home-variant fw-semibold text-center"> Address:</h3>
              <a href="https://maps.app.goo.gl/3fF7Fq8c6oAueQsu5" class="btn">
                10330 Lake Shore Dr, Nampa, ID 83686
              </a>
            </div>

            <div class="col-12 d-flex flex-column justify-content-center">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item border border-0">
                  <div class="accordion-header">
                    <h3 class="mdi mdi-clock fw-semibold me-1 text-center"> Hours: </h3>
                    <button class="d-flex btn accordion-button collapsed rounded-4" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                      aria-controls="collapseOne">
                      <p class="flex-grow-1 text-center ms-4 mb-0">
                        {{ ' ' + hours[new
              Date().getDay()].split('|')[0]
                        }}
                        {{
              hours[new Date().getDay()].split('|')[1] }}
                      </p>
                    </button>
                  </div>
                  <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <table class="table">
                        <tbody>
                          <tr v-for="hour, index in hours" :key="index" :class="[index == 0 ? 'table-secondary' : '']">
                            <th scope="row"></th>
                            <td>{{ hour.split('|')[0]
                              }}</td>

                            <td>{{
              hour.split('|')[1] }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 d-flex flex-column justify-content-center">
              <h3 class="mdi mdi-phone fw-semibold text-center"> Phone:</h3>
              <a href="tel:2083535939" class="btn">
                (208) 353-5939
              </a>
            </div>

            <div class="col-12 d-flex flex-column justify-content-center">
              <h3 class="mdi mdi-email fw-semibold text-center"> Email:</h3>
              <a href="mailto:puppylovesuites@gmail.com" class="btn">
                puppylovesuites@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div class="modal-footer justify-content-center">
          <button class="close-button fs-1 mdi mdi-close-circle-outline" data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>

      </div>
    </div>
  </div>
</template>





<style lang="scss" scoped>
.close-button {
  border: none;
  background-color: transparent;
  color: var(--bs-secondary);
}

a,
button {
  background-color: var(--bs-primary);
  border-radius: 18px;
  border: none;
  padding: 8px;
  color: white;
  font-weight: 600;
}

.close-button:hover {

  color: var(--bs-primary)
}

ul {
  list-style-type: none;
}

.modal-body>ul>li {
  margin-top: 1rem;
}
</style>