<template>
  <v-container fluid>
    <h1  class="mb-12"
      style="
        color: #e56f51;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        position: center;
      ">Manage Mail Service</h1>
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
          <th class="text-left">Employee Name</th>
            <th class="text-left">Service Type</th>
          <th class="text-left">Details</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="service in searchFilter" :key="service.details">
          
          <td>{{ service.employee }}</td>
          <td>{{ service.type }}</td>
          <td>
            {{service.details}}
          </td>
          
          <td>
            
            <v-btn class="ml-3" color="#299c8d"
              >Delete
              <v-icon color="white">mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    
    
  </v-container>
</template>
<script>
import { toRaw } from "@vue/reactivity";
export default {
  data: () => ({
    services: [
      {
        employee: "",
        type: "",
         details: "",
      
      },
   
    ],
    search: '',
    
  }),
 
  computed:{
   
    searchFilter(){
      
      let search = this.search
      let services = this.services
     if (search) { return services.filter((item) => { 
       
        return search.toLowerCase().split(' ').every(ch => item.employee.toLowerCase().includes(ch))
       
      })
     } else {
      return services
   
     }
    }
  }
};

</script>