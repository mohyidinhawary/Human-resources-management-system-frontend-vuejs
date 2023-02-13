<template>
  <v-container  >
    <h2  class="mb-12" style="
        color: #e56f51;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        position: center;
      "> Employee Set Salary</h2>
    
   
    <v-row class=" row1 mb-12">
      <v-col >
    <v-card class="w-100 mb-12">
      <v-card-title>
        <v-card-subtitle><h1>Discounts</h1></v-card-subtitle>
      </v-card-title>
     
      <v-divider></v-divider>
      <v-card-item>
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
          
          <th class="text-left">Discount Type</th>
          <th class="text-left"> Discount Amount</th>
          <th class="text-left">Discount Deatils</th>
         
          
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="discount in searchFilter" :key="discount.amount">
          
          <td>{{ discount.type }}</td>
          <td>{{discount.amount }}</td>
          <td>{{ discount.details }}</td>
          
    

        </tr>
      </tbody>
    </v-table>

    </v-card-item>
    </v-card >
      </v-col>
    </v-row>
    

      <v-row class="row2">
    <v-card class="w-100">
      <v-card-title>
        <v-card-subtitle><h1>Increases</h1></v-card-subtitle>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-item>
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
          
          <th class="text-left">Increase Type</th>
          <th class="text-left"> Increase Amount</th>
          <th class="text-left">Increase Deatils</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="increase in searchFilter2" :key="increase.amount">
        
          <td>{{ increase.type }}</td>
          <td>{{increase.amount }}</td>
          <td>{{ increase.details }}</td>
          
    

          
        </tr>
      </tbody>
    </v-table>
    </v-card-item>
    </v-card>
     
   
  </v-row>
    
    
  </v-container>
</template>

<script>
export default {
  
  
  data: () => ({
    
    discounts:[
        {
            
            
           
            type:'',
            amount:'',
            details:'',

        }
    ],
     increases:[
        {
          
            
           
            type:'',
            amount:'',
            details:'',

        }
    ],
    
  }),
  computed:{
   
    searchFilter(){
      
      let search = this.search
      let   discounts = this.  discounts
     if (search) { return   discounts.filter((item) => { 
       
        return search.toLowerCase().split(' ').every(ch => item.type.toLowerCase().includes(ch))
       
      })
     } else {
      return   discounts
   
     }
    },
    searchFilter2(){
      
      let search = this.search
      let  increases = this.  increases
     if (search) { return   increases.filter((item) => { 
       
        return search.toLowerCase().split(' ').every(ch => item.type.toLowerCase().includes(ch))
       
      })
     } else {
      return increases
   
     }
    },
  }
};
</script>