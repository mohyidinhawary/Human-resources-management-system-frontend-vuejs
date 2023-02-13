
<template>
  <v-container  >
    <h1 class="mb-12" style="color:#e56f51;text-align: center; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ; position:center;" >Employe Profile</h1>
    <v-avatar  size="150px" class=" avatar mb-12"><v-img :src= 'employeeData.image'/></v-avatar>
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
            <span>{{employeeData.id}}</span>
        </div>
        </div>
<div class="col-md-6">
          <div class="info text-sm font-style">
            <strong class="font-bold">name:</strong>
            <span>{{employee.name}}</span>
            <span>{{employeeData.firstName}} {{employeeData.maidenName}}  {{employeeData.lastName}}</span>
        </div>
        </div>
        <div class="col-md-6">
          <div class="info text-sm font-style">
            <strong class="font-bold">email:</strong>

<span>{{employee.email}}</span>
           <span>{{employeeData.email}}</span>
        </div>
        </div>
         <div class="col-md-6">
          <div class="info text-sm">
            <strong class="font-bold">date of birth:</strong>
            <span >{{employeeData.dateofbirth}}</span>
          
        </div>
        </div>
        <div class="col-md-6">
          <div class="info text-sm font-style">
            <strong class="font-bold">phone:</strong>
            <span>{{employee.phone}}</span>
                  <span >{{employeeData.phone}}</span>
          
        </div>
        </div>
        <div class="col-md-6">
          <div class="info text-sm">
            <strong class="font-bold">address:</strong>
            <span>{{employeeData.address}}</span>
          
        </div>
        </div>
        
    
        <div class="col-md-6">
          <div class="info text-sm">
            <strong class="font-bold">basic salary:</strong>
            <span>{{employeeData.basicsalary}}</span>
          
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
          
        </div>
        </div>
        <div class="col-md-6">
          <div class="info text-sm font-style">
            <strong class="font-bold">department:</strong>
            <span>{{employeeData.department}}</span>
          
        </div>
        </div>
         <div class="col-md-6">
          <div class="info text-sm">
            <strong class="font-bold">job title:</strong>
            <span>{{employee.jobtitle}}</span>
          
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
            <span>{{employeeData.cardNumber}}</span>
          
        </div>
        </div>
         
      
             
    </v-card-item>
    </v-card>
   </v-col>
    </v-row>
    
  </v-container>
</template>


<script>
//import person from '@/assets/raneem.jpg'
import axios from 'axios';
export default {
 
  data: () => ({
    person :'',
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
    employeeData: ''
  }),
  mounted(){
    let url = `https://dummyjson.com/users/${this.$route.params.id}`
    axios.get(url).then((res) => {
      console.log(res);
      this.employeeData = res.data
    })
  }
};
</script>
