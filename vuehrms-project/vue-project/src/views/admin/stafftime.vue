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
          <th class="text-left">Employee </th>
          <th class="text-left">Date</th>
          <th class="text-left">at work</th>
          <th class="text-left">ClockIn</th>
          <th class="text-left">ClockOut</th>
          <th class="text-left">Late</th>
          <th class="text-left">Early Leaving</th>
          <th class="text-left">OverTime</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in  employees" :key="employee.name">
          <td>
            
              {{ employee.name }}
            
          </td>
          <td>{{ employee.date }}</td>
          <td><v-checkbox
      v-model="checkbox"

    ></v-checkbox></td>
          <td>{{ employee.clockin }}</td>
          <td>{{ employee.clockout }}</td>
          <td>{{ employee.late }}</td>
          <td>{{ employee.earlyleaving }}</td>
          <td>{{ employee.overtime }}</td>

          <td>
            <v-btn color="#e9c46a"
              >Edit
              <div class="d-flex justify-space-around">
                <v-icon  color="white">mdi-pencil</v-icon>
              </div>
            </v-btn>
            <v-btn class="ml-3" color="#299c8d"
              >Delete
              <v-icon  color="white">mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    
  </v-container>
</template>

<script>
export default {
name:'attendance-table',
 data: () => ({
   
        checkbox: true,
      
    cloumn:null,
    inline:null,
    employees: [
      {
       
        name: "",
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