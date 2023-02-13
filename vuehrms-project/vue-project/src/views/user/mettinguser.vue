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
         
        </tr>
      </tbody>
    </v-table>
  
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
