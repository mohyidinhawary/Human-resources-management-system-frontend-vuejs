<template>
  <div class="admin-view">
    <v-app-bar>
      <v-app-bar-nav-icon color="#299c8d"> </v-app-bar-nav-icon>

 
      <v-btn color="teal darken-4--text">
        <v-icon size="30" color="#299c8d">mdi-bell-outline</v-icon>
      </v-btn>
      <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
       color="#299c8d"
          v-bind="props"
          icon="mdi-google-translate"
        >
        </v-btn>
      </template>

      <v-list>
        <v-list-item 
          v-for="(item, index) in $i18n.availableLocales"
          :key="index"
          @click="changeLocal(item)"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      <!--f2a160 اورانج فاتح  
       e8c36b   
       299c8d  
       أزرق  264653-->
    </v-app-bar>
    <NavMe />
    <router-view></router-view>
  </div>
</template>

<script>
import NavMe from "../components/NavMe.vue";
export default {
  components: {
    NavMe,
  },
   computed: {
    searchFilter() {
      let search = this.search;
      let employees = this.employees;
      if (search) {
        return employees.filter((item) => {
          return search
            .toLowerCase()
            .split(" ")
            .every((ch) => item.department.toLowerCase().includes(ch));
        });
      } else {
        return employees;
      }
    },}
  
};
</script>
