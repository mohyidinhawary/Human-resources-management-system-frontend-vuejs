
<template>
  <v-container fluid>
    <h1 class="mb-12"
      style="
        color: #e56f51;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        position: center;
      ">Manage Performance</h1>
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
          <th class="text-left">Name</th>
          <th class="text-left">Branch</th>
          <th class="text-left">Department</th>
          <th class="text-left">Job Title</th>
          <th class="text-left">OverAll Rating</th>
           
            <th class="text-left">Created At</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in searchFilter" :key="employee.name">
          <td>
            {{employee.name}}
          </td>

          <td>{{ employee.branch }}</td>
          <td>{{ employee.department }}</td>
          <td>{{ employee.jobtitle }}</td>
          <td>{{ employee.overallrating }}</td>
          <td>{{ employee.addedby }}</td>
          <td>{{ employee.createdat }}</td>

          <td>
            <v-btn @click="edit(employee)"
 color="#e9c46a"
              >Edit
              <div class="d-flex justify-space-around">
                <v-icon color="white">mdi-pencil</v-icon>
              </div>
            </v-btn>
            <v-btn class="ml-3" color="#299c8d"
              >Delete
              <v-icon color="white">mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn button-add
         class="button-add" color="#e56f51"
          v-bind="props"
         
        >
       Add a review
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Appraisal Details</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="12"
              >
                <v-text-field
                  variant="outlined"
                     color="#e8c36b"
                  label=" employee name"
                  required
                ></v-text-field>
              </v-col>
             
         
              <v-col cols="12" sm="6" md="12">
                 
                <v-select
                  variant="outlined"
                  color="#e8c36b"
                  :items="selectItems"
                  item-value="state"
                  item-title="state"
                  label=""
                  required
                ></v-select>
                </v-col>
              
              
            </v-row>
          </v-container>
        
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
         
            <v-btn color="#264653" text @click="dialog = false"> Close </v-btn>
          <v-btn color="#e56f51" text @click="dialog = false"> Create </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    
  </v-container>
</template>
<script>
import { toRaw } from "@vue/reactivity";
export default {
  data: () => ({
    dialog:false,
    selectItems: [
      { state: '10%', },
          { state: '20%',  },
          { state: '30%',  },
          { state: '40%',  },
            { state: '50%',  },
              { state: '60%',  },
                { state: '70%',  },
                  { state: '80%',  },
                    { state: '90%',  },
                      { state: '100%',  },
                       
        
    ],
    employees: [
      {
        name: "",
        branch: "",
        department: "",
        jobtitle: "",
        overallrating:'',
        addedby:'',
        createdat:'',

      
      },
      
    ],
    search: ''
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
       
        return search.toLowerCase().split(' ').every(ch => item.department.toLowerCase().includes(ch))
       
      })
     } else {
      return employees
   
     }
    }
  }
};

</script>
<style>
.button-add {
  bottom: 0.4cm;
  position: fixed !important;
  right: 0.4cm !important;
}
</style>