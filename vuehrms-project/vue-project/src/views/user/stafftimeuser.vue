<template>
  <v-container fluid>
    <h1 class="mb-12" style="
        color: #e56f51;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        position: center;
      ">Manage Attendance List</h1>
   
   
      

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
         
          <th class="text-left">Date</th>
          <th class="text-left">At Work</th>
          <th class="text-left">ClockIn</th>
          <th class="text-left">ClockOut</th>
          <th class="text-left">Late</th>
          <th class="text-left">Early Leaving</th>
          <th class="text-left">OverTime</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in  employees" :key="employee.name">
          
          <td>{{ employee.date }}</td>
            <td><v-checkbox
      v-model="checkbox"

    ></v-checkbox></td>
          <td>{{ employee.clockin }}</td>
          <td>{{ employee.clockout }}</td>
          <td>{{ employee.late }}</td>
          <td>{{ employee.earlyleaving }}</td>
          <td>{{ employee.overtime }}</td>

        </tr>
      </tbody>
    </v-table>
    
  </v-container>
</template>

<script>
export default {
name:'attendance-table',
 data: () => ({
    cloumn:null,
    inline:null,
    employees: [
      {
       
      
        date: "",
        status: "",
        clockin: "",
        clockout: "",
        late: "",
        earlyleaving:'',
        overtime:'',
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
}
</script>

<style>

</style>