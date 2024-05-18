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
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary rounded-4 text-white fw-bold" data-bs-toggle="modal"
    data-bs-target="#contactModal">
    CONTACT INFO
  </button>

  <!-- Modal -->
  <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header justify-content-center">
          <h1 class="modal-title fw-bold fs-5 " id="contactModalLabel">
            <button @click="closeModal"
              class="btn bg-primary text-white px-2 py-1 rounded selectable text-uppercase fs-3 fw-bold">
              CONTACT US
            </button>
          </h1>
        </div>

        <div class="modal-body">

          <ul>
            <li><span class="mdi mdi-home-variant fw-semibold"> Address:</span> 10330 Lake Shore Dr, Nampa, ID 83686
            </li>
            <li>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item border border-0">
                  <div class="accordion-header">
                    <button class="accordion-button p-0 collapsed flex items-start pe-2" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                      aria-controls="collapseOne">
                      <span class="mdi mdi-clock fw-semibold me-1"> Hours: </span>{{ ' ' + hours[new
              Date().getDay()].split('|')[0]
                      }}
                      {{
              hours[new Date().getDay()].split('|')[1] }}
                    </button>
                  </div>
                  <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <table class="table">
                        <tbody>
                          <tr v-for="hour, index in hours" :key="index"
                            :class="[index % 2 == 0 ? 'table-secondary' : '']">
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
            </li>
            <li><span class="mdi mdi-phone fw-semibold"> Phone:</span> (208) 353-5939</li>
            <li><span class="mdi mdi-email fw-semibold"> Email:</span> puppylovesuites@gmail.com</li>
          </ul>
          <p class="mx-5">
            We'd love to hear from you! Whether you have questions about our services, want to schedule a tour of our
            facilities, or just want to say hello, we're here to help.
          </p>
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
  // width: 56px;
  // height: 56px;
  // border-radius: 50%;
  border: none;
  background-color: transparent;
  color: var(--bs-secondary);
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