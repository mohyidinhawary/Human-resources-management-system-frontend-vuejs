
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
        <v-card-subtitle>Discounts</v-card-subtitle>
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
          
    

          <td>
            <v-row>
                <v-col cols="2" class="mr-12">
             <v-btn class="mr-2"  color="#e9c46a"
              >Edit
              <div class="d-flex justify-space-around">
                <v-icon color="white">mdi-pencil</v-icon>
              </div>
            </v-btn>
                </v-col>
                <v-col cols="2">
            <v-btn class="ml-3" color="#299c8d"
              >Delet
              <v-icon color="white">mdi-delete</v-icon>
            </v-btn>
                </v-col>
            </v-row>
          </td>
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
        <v-card-subtitle>Increases</v-card-subtitle>
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


<td>
            <v-row>
                <v-col cols="2" class="mr-12">
             <v-btn class="mr-2"  color="#e9c46a"
              >Edit
              <div class="d-flex justify-space-around">
                <v-icon color="white">mdi-pencil</v-icon>
              </div>
            </v-btn>
                </v-col>
                <v-col cols="2">
            <v-btn class="ml-3" color="#299c8d"
              >Dele
              <v-icon color="white">mdi-delete</v-icon>
            </v-btn>
                </v-col>
            </v-row>
          </td>
        </tr>
      </tbody>
    </v-table>
    </v-card-item>
    </v-card>
     
    </v-row>
      <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn class="button1"
         color="#e56f51"
          v-bind="props"
        >
       New Discount
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Discount Details</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
               
               <v-col
                cols="12"
               
              >
                <v-select
                variant="outlined"
      color="#e8c36b"
                  :items="['loan','leave']"
                  label="discount type"
                  required
                ></v-select>
              </v-col>
             
              <v-col cols="12" >
                <v-text-field
                variant="outlined"
      color="#e8c36b"
                  label="discount amount"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" >
               <v-textarea
               variant="outlined"
      color="#e8c36b"
      label="discount details"
    ></v-textarea>
              </v-col>
              
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
           <v-btn color="#264653" text @click="dialog = false"> Close </v-btn>
          <v-btn color="#e56f51" text @click="dialog = false"> Create </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <v-row justify="center">
    <v-dialog
      v-model="dialog2"
      persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn class="button2"
        color="#e56f51"
          v-bind="props"
        >
       New Increasment
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Increasment Details</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>

<v-col
                cols="12"
                
              >
                <v-select
                variant="outlined"
      color="#e8c36b"
                  :items="['award','overtime']"
                  label="increasment type"
                  required
                ></v-select>
              </v-col>
             
              <v-col cols="12">
                <v-text-field
                variant="outlined"
      color="#e8c36b"
                  label="increasment amount"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" >
               <v-textarea
               variant="outlined"
      color="#e8c36b"
      label="increasment details"
    ></v-textarea>
              </v-col>
              
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
         
          <v-btn color="#264653" text @click="dialog2 = false"> Close </v-btn>
          <v-btn color="#e56f51" text @click="dialog2 = false"> Create </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    
    
  </v-container>
</template>

<script>
export default {
  
  
  data: () => ({
    dialog:false,
    dialog2:false,
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

<style>
.button2{
 bottom: 0.2cm !important;
 position: fixed !important;
 right: 0.5cm!important;
}

.button1{
  bottom: 0.2cm !important;
  position: fixed !important;
 
   left:7.5cm !important;
}
</style>
