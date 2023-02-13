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
    >Manage Meeting</h1>
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
          <th class="text-left">Meeting Title</th>
          <th class="text-left">Meeting Date</th>
          <th class="text-left">Meeting Time</th>
          <th class="text-left">Meeting Place</th>
           <th class="text-left">relevant personnel</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="meeting in searchFilter" :key="meeting.title">
         
          <td>
            {{meeting.title}}
          </td>
          <td>{{ meeting.date }}</td>
          <td>{{ meeting.time }}</td>
          <td>{{ meeting.relevantpersonnel}}</td>
          <td>{{meeting.place}}</td>
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
        <v-btn class="button-add" color="#e56f51"
          v-bind="props"
        >
       New Meeting
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">New Trainer</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                
                 <v-col cols="12" sm="6" md="6">
                <v-text-field
                  variant="outlined"
      color="#e8c36b"
                  label="meeting title"
                  required
                ></v-text-field>
              </v-col>
               <v-col cols="12" sm="6" md="6">
                <v-text-field
                  variant="outlined"
      color="#e8c36b"
                  label="meeting date"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  variant="outlined"
      color="#e8c36b"
                  label="meeting time"
                  required
                ></v-text-field>
              </v-col>
              
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  variant="outlined"
      color="#e8c36b"
                  label="meeting place"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="12"
              >
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
              
                  
                
              </v-col>
              
               
              <v-col cols="12" >
               <v-textarea
                 variant="outlined"
      color="#e8c36b"
      label="meeting note"
    ></v-textarea>
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
    meetings: [
      {
         title: "",
        date: "",
        time:'',
        place:'',
       relevantpersonnel:'',


},
      
      
   
    ],
    search: '',
     dialog:false,
      select: [],
  }),
  methods: {
    edit(employee) {
      console.log(toRaw(employee));
    },
  },
   

  computed:{
   
    searchFilter(){
      
      let search = this.search
      let meetings = this.meetings
     if (search) { return meetings.filter((item) => { 
       
        return search.toLowerCase().split(' ').every(ch => item.title.toLowerCase().includes(ch))
       
      })
     } else {
      return meetings
   
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