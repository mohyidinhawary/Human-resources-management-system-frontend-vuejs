<template>
  <v-app >
  
   
    
    <v-main>
      <router-view/>
  
 </v-main>

</v-app>



</template>

<script>
import logo from '@/assets/test.png'
import NavMe from "@/components/NavMe.vue";


export default {
    name: "App",
 
      data: () => ({ 
    logo,
  }),

  components: { NavMe },
  
    data: () => ({
    //
    }),
   data: () => ({ 
    logo,
  }),
   
   
}
</script>
