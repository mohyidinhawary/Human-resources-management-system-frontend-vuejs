محي الدين, [١١/٠٨/٢٠٢٢ ٠٧:٢٤ م]
<template>
<v-container>
    <h1 class="mb-12" style="
        color: #e56f51;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        position: center;
      ">Service Request</h1>
  <v-card max-width="500" class="ma-auto pa-2" flat>
    

    <v-form ref="form" >
       
               <v-select
                  :items="['leave','resignation','complaint']"
                  label="service type"
                  required
                  color="#e8c36b"
                   variant="outlined"
                ></v-select>
                 <v-textarea
      label="description"
       required
                  color="#e8c36b"
                   variant="outlined"
    ></v-textarea>
      
      <v-btn block color="#e9c46a" >
      Send
      </v-btn>
     
    </v-form>

  </v-card>
</v-container>
</template>

<script>

export default {
  data: () => ({


   
    
  }),
};

</script>