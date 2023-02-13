<template>
  <v-container fluid>
    <h1 class="mb-12"
      style="
        color: #e56f51;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        position: center;
      ">Employee Archive</h1>
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
          <th class="text-left">Employee id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">Branch</th>
          <th class="text-left">Department</th>
          <th class="text-left">Job Title</th>
          <th class="text-left">Date Of Joining</th>
     
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in searchFilter" :key="employee.id">
          <td>
            <v-btn to="employe" color="#f2a160">
              {{ employee.employeeid }}
            </v-btn>
          </td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.branch }}</td>
          <td>{{ employee.department }}</td>
          <td>{{ employee.jobtitle }}</td>
          <td>{{ employee.dateofjoining }}</td>

          
        </tr>
      </tbody>
    </v-table>
    
    
  </v-container>
</template>


<script>
import { toRaw } from "@vue/reactivity";
export default {
  data: () => ({
    
    cloumn:null,
    inline:null,
    employees: [
      {
        employeeid: "",
        name: "",
        email: "",
        branch: "",
        department: "",
        jobtitle: "",
        dateofjoining: "",
      },
      
    ],
    search: ''
  }),
 
  computed:{
   
    searchFilter(){
      
      let search = this.search
      let employees = this.employees
     if (search) { return employees.filter((item) => { 
       
        return search.toLowerCase().split(' ').every(ch => item.name.toLowerCase().includes(ch))
       
      })
     } else {
      return employees
   
     }
    }
  }
};

</script>