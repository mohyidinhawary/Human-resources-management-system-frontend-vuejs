<template>
  <v-container fluid>
    <h1
      class="mb-12"
      style="
        color: #e56f51;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        position: center;
      "
    >
     Warning
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
    <v-card>
      <v-table fixed-header class="data-table">
        <thead>
          <tr>
         

            <th class="text-left"><h1 style=" text-align: center; color:#264653;">Details </h1></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="warning in searchFilter" :key="warning.Details ">
          
            <td>{{ warning.Details }}</td>
       </tr></tbody></v-table></v-card>
              
  </v-container>
</template>
<script>
import { toRaw } from "@vue/reactivity";
export default {
  data: () => ({
    warnings: [
      {
     
        Details: "",
      },
    ],
    search: "",
  
  }),
 
 
  computed: {
    searchFilter() {
      let search = this.search;
      let warnings = this.warnings;
      if (search) {
        return warnings.filter((item) => {
          return search
            .toLowerCase()
            .split(" ")
            .every((ch) => item.subject.toLowerCase().includes(ch));
        });
      } else {
        return warnings;
      }
    },
  },
};
</script>

<style>
.button-add {
  bottom: 0.4cm;
  position: fixed !important;
  right: 0.4cm !important;
}
</style>
