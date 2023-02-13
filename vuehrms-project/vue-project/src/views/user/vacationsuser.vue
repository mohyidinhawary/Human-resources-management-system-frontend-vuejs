<template>
  <v-container fluid>
    <h1
      class="mb-12"
      style="
        color: #e56f51;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        position: center;" >
 Vacations
    </h1>
    <v-text-field
      variant="outlined"
      color="#e8c36b"
      v-model="search"
      prepend-inner-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-table fixed-header class="data-table">
      <thead>
        <tr>
          <th class="text-left">Employee</th>
          <th class="text-left">Leave Type</th>
          <th class="text-left">Applied On</th>
          <th class="text-left">Start Date</th>
          <th class="text-left">End Date</th>
          <th class="text-left">Total Days</th>
          <th class="text-left">Leave Reason</th>
        
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in searchFilter" :key="employee.name">
          <td>
            {{ employee.name }}
          </td>
          <td>{{ employee.leavetype }}</td>
          <td>{{ employee.appliedon }}</td>
          <td>{{ employee.startdate }}</td>
          <td>{{ employee.enddate }}</td>
          <td>{{ employee.totaldays }}</td>
          <td>{{ employee.leavereason }}</td>
        

       
          
        </tr>
      </tbody>
    </v-table>

   
  </v-container>
</template>

<script>
export default {
  name: "vaccitions-table",
  data: () => ({
    dialog: false,
    employees: [
      {
        name: "",
        leavetype: "",
        appliedon: "",
        startdate: "",
        enddate: "",
        totaldays: "",
        leavereason: "",
        status: "",
      },
    ],
    search: "",
  }),
  computed: {
    searchFilter() {
      let search = this.search;
      let employees = this.employees;
      if (search) {
        return employees.filter((item) => {
          return search
            .toLowerCase()
            .split(" ")
            .every((ch) => item.name.toLowerCase().includes(ch));
        });
      } else {
        return employees;
      }
    },
  },
};
</script>

<style>
.button {
  bottom: 0.4cm;
  position: fixed !important;
  right: 0.4cm !important;
}
</style>
