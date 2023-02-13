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
    >My Training</h1>
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
          <th class="text-center">Training Name
          </th>
                 <th class="text-center"> Coach's Name</th>
           <th class="text-center">Training Duration</th>
      
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in searchFilter" :key="employee.name">
          
          <td>{{ employee.trainingtype }}</td>
 
          <td>
            {{employee.cosh}}</td>

          <td>{{ employee.trainer }}</td>
          <td>{{ employee.tariningduration }}</td>
          

     
        </tr>
      </tbody>
    </v-table>
  
    
  </v-container>
</template>
<script>
import { toRaw } from "@vue/reactivity";
export default {
  data: () => ({
    employees: [
      {
        trainingtype: "",
        status: "",
         name: "",
        branch: "",
        trainer:'',
       tariningduration :'',
        cost:'',

      
      },
   
    ],
    
    search: '',
     dialog:false,
  }),
  methods: {
    edit(employee) {
      console.log(toRaw(employee));
    },
  },
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
