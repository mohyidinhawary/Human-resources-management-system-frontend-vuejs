<template>
<div v-resize="onResize">
  <v-navigation-drawer :rail="rail" class="mt-0" permanent v-model="navbar">
    <v-list  light>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img :src="logo" max-width="180" max-height="180"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense color="#e8c36b">
     
      <v-list-item  v-for="(item, i) in navLinks" :key="i" v-bind:to="item.to">
        <template v-slot:prepend v-if="item.icon">

          <v-icon :icon="item.icon" v-if="item.icon" color='#e8c36b'></v-icon>
        </template>
        <v-list-item-title >{{item.name}}</v-list-item-title>
       
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  </div>
</template>

<script>
import logo from '../assets/test.png'
export default {
  data: () => ({
    logo,
    rail: true,
    navLinks: [
      {
        name: "Profile",
        to: "/user/profileuser",
        icon: "mdi-account",
      },
      {
        name: "Finance",
        to: "/user/financeuser",
         icon: 'mdi-finance'


      },
      
      {
        name: "Staff time",
        to: "/user/stafftimeuser",
         icon: 'mdi-alarm-multiple'

      },
         {
        name: "Vacations",
        to: "/user/vacationsuser",
         icon: 'mdi-alarm'

      },
      
      {
       name: "Servic Request",
        to: "/user/servicerequest",
         icon: 'mdi-email-plus'

      },
        {
       name: "Warning",
        to: "/user/warninguser",
         icon: 'mdi-account-alert-outline'

      },
      {
      name: "Training",
        to: "/user/traininguser",
         icon: 'mdi-card-account-details'

      },
    
       {
      name: "Meeting",
        to: "/user/mettinguser",
         icon: 'mdi-calendar-account'

      },


       {
      name: "Company Policy",
        to: "/user/companypolicyuser",
         icon: 'mdi-domain'

      },
     {
      name: "Logout",
        to: "/",
         icon: 'mdi-logout'

      },
    ],
    navbar: true
  }),
  methods:{
    onResize(){
      console.log(window.innerWidth);
      if (window.innerWidth <= 600) {
        this.rail = true
      }else{
        this.rail = false
      }
    }
  }
};
</script>
