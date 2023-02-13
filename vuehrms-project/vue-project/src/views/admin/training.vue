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
    >Manage Training</h1>
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
          <th class="text-center">Training Name </th>
          <th class="text-center"> Coach's Name</th>
          <th class="text-center">Training Duration</th>
            <th class="text-center">Trainer</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in searchFilter" :key="employee.coach"> 
          <td class="text-center">{{ employee.trainingtype }}</td>
          <td class="text-center"> {{employee.coach}}
          </td>
          <td class="text-center">{{ employee.trainer }}</td>
          <td class="text-center">{{ employee.tariningduration }}</td>
        

          <td>
<v-btn @click="edit(employee)"
            color="#e9c46a"
              >Edit
              <div class="d-flex justify-space-around">
                <v-icon color="white">mdi-pencil</v-icon>
              </div>
            </v-btn>
            <v-btn class="ml-3"
            color="#299c8d"
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
        <v-btn class="button-add" color="#e56f51"
          v-bind="props"
        >
       New Training
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">New Training</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                  <v-col cols="12" sm="6" md="6">
               <v-text-field
                variant="outlined"
      color="#e8c36b"
                  label="Training Name*"
                  required
                ></v-text-field>
              </v-col>
                  <v-col cols="12" sm="6" md="6">
               <v-text-field
                variant="outlined"
      color="#e8c36b"
                  label="Coach's Name*"
                  required
                ></v-text-field>
              </v-col>
        
               <v-col cols="12" sm="6" md="6">
                <v-text-field
                variant="outlined"
      color="#e8c36b"
                  label="start date*"
                  
                  required
                ></v-text-field></v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                variant="outlined"
      color="#e8c36b"
                  label="end date*"
                  
                  required
                ></v-text-field>
              </v-col>
           
              
             
 <v-col cols="12" sm="6" md="12">
  <v-combobox
     variant="outlined"
      color="#e8c36b"
          v-model="select"
          :items="employees"
          item-value="name"
          item-title="name"
          label="Combobox"
          multiple
          outlined
          dense
        ></v-combobox>
             <!-- <v-combobox
                variant="outlined"
      color="#e8c36b"
      v-model="model"
      v-model:search-input="search"
      :items="items"
      hide-selected
      hint=""
      label="Add some tags"
      multiple
      persistent-hint
      small-chips
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-combobox> -->
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
    employees: [
      {
        trainingtype: "",

         coach: "",
        trainer:'',
       tariningduration :'',
     

      
      },
      
    ],
    select: [],
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
<style>
.button-add {
  bottom: 0.4cm;
  position: fixed !important;
  right: 0.4cm !important;
}
</style>