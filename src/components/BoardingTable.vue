<template>
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

</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>
