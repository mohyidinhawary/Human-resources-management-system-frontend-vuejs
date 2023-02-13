
<template>
  <v-container  >
    <h1 class="mb-12" style="color:#e56f51;text-align: center; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ; position:center;" >My Profile</h1>
    <v-avatar  size="150px" class=" avatar mb-12"><v-img :src= 'person'/></v-avatar>
    <v-row class=" row1 mb-12">
      <v-col >
    <v-card class="w-100 mb-12" v-for="employee in personaldetail" :key="employee.id" :elevation="hover ? 24 : 6">
      <v-card-title>
        <v-card-subtitle >
        <h2 style="color:#299c8d ;text-align: center;font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;  ">Pesrsonal Detail</h2></v-card-subtitle>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-item>
      <div class="row">
        <div class="col-md-6">
          <div class="info text-sm">
            <strong class="font-bold"> employee id:</strong>
            <span>{{employee.employeeid}}</span>
            <span></span>
          
        </div>
        </div>
<div class="col-md-6">
          <div class="info text-sm font-style">
            <strong class="font-bold">name:</strong>
            <span>{{employee.name}}</span>
            <span>Raneem Kharbotly</span>
          
        </div>
        </div>
        <div class="col-md-6">
          <div class="info text-sm font-style">
            <strong class="font-bold">email:</strong>

<span>{{employee.email}}</span>
            <span>raneem@gmail.com</span>
          
        </div>
        </div>
         <div class="col-md-6">
          <div class="info text-sm">
            <strong class="font-bold">date of birth:</strong>
            <span>{{employee.dateofbirth}}</span>
            <span>1-1-1996</span>
          
        </div>
        </div>
        <div class="col-md-6">
          <div class="info text-sm font-style">
            <strong class="font-bold">phone:</strong>
            <span>{{employee.phone}}</span>
            <span>0945565414</span>
          
        </div>
        </div>
        <div class="col-md-6">
          <div class="info text-sm">
            <strong class="font-bold">address:</strong>
            <span>{{employee.address}}</span>
              <span>Damascuse</span>
          
          
        </div>
        </div>
        
    
        <div class="col-md-6">
          <div class="info text-sm">
            <strong class="font-bold">basic salary:</strong>
            <span>{{employee.basicsalary}}</span>
            <span>500000 $</span>
          
        </div>
        </div>
        
        
      </div>
    </v-card-item>
    </v-card>
      </v-col>
      <v-col>
    <v-card class="w-100 mb-12"  v-for="employee in companydetail" :key="employee.id" :elevation="hover ? 24 : 6">
      <v-card-title>
        <v-card-subtitle> 
            <h2 style="color:#299c8d ;font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ; text-align: center; ">Company Detail</h2></v-card-subtitle>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-item>
              <div class="row">
                <div class="col-md-6">
          <div class="info text-sm">
            <strong class="font-bold">branch:</strong>
            <span>{{employee.branch}}</span>
            <span>syria</span>
          
        </div>
        </div>
        <div class="col-md-6">
          <div class="info text-sm font-style">
            <strong class="font-bold">department:</strong>
            <span>{{employee.department}}</span>
            <span>IT</span>
          
        </div>
        </div>
         <div class="col-md-6">
          <div class="info text-sm">
            <strong class="font-bold">job title:</strong>
            <span>{{employee.jobtitle}}</span>
            <span>developer</span>
          
        </div>
        </div>
        <div class="col-md-6">
          <div class="info text-sm font-style">
            <strong class="font-bold">date of Joining:</strong>
            <span>{{employee.dateofjoining}}</span>
          
        </div>
        </div>
         <div class="col-md-6">
          <div class="info text-sm font-style">
            <strong class="font-bold">Perforam:</strong>
            <span>{{employee.perforamce}}</span>
          
        </div>
        </div>
      
              </div>
    </v-card-item>
    </v-card>
      </v-col>
    </v-row>
    <v-row class="row2">
      <v-col>
    <v-card class="w-100 mb-12"  v-for="employee in  documentdetail" :key="employee.id" :elevation="hover ? 24 : 6">
      <v-card-title>
        <v-card-subtitle>
            <h2 style="color:#299c8d ;text-align: center;font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;  ">
            Document Detail</h2></v-card-subtitle>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-item>
      <div> 
        <div class="col-md-6">
          <div class="info text-sm">
            <strong class="font-bold">resume:</strong>
            <span>{{employee.file}}</span>
          
        </div>
        </div>
      </div>
    </v-card-item>
    </v-card>
      </v-col>
   <v-col>
    <v-card class="w-100 mb-12" v-for="employee in bankaccountdetail" :key="employee.id" :elevation="hover ? 24 : 6">
      <v-card-title>
        <v-card-subtitle>
            <h2 style="color:#299c8d;text-align: center ;font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ; position:center; ">
            Bank Account Detail
</h2>
        </v-card-subtitle>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-item>
              <div class="row">
           
        </div>
        <div class="col-md-6">
          <div class="info text-sm font-style">
            <strong class="font-bold">account number:</strong>
            <span>{{employee.accountnumber}}</span>
          
        </div>
        </div>
         
      
             
    </v-card-item>
    </v-card>
   </v-col>
    </v-row>
    
  </v-container>
</template>


<script>
import person from '@/assets/raneem.jpg'
export default {
 
  data: () => ({
    person,
    
    personaldetail: [
      {
        employeeid: "",
        name: "",
        email: "",
        dateofbirth:'',

        department: "",
        phone:'',
        address:'',
        basicsalary:'',
      },
      ],
      companydetail:[{
        branch:'',
        department:'',
        jobtitle: "",
        dateofjoining: "",
        perforamce:"",
      },
      
    ],
    documentdetail:[{
file:'',
    }],
    bankaccountdetail:[{
      
      accountnumber:'',
    }],
  })
};
</script>
