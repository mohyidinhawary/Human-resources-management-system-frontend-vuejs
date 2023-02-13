<template>
  <v-app-bar>
    <v-spacer></v-spacer>
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

  </v-app-bar>
  <div>
    <v-container>
      <v-img :src="logo" class="mx-auto" contain height="200" width="200" />

      <LogForm />
    </v-container>
    <div>
      <!--<v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="#264653"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="text-center text-white mt-4"
        color="#264653"
        cols="12"
      >
      <strong >Project 1</strong> <v-icon>copyright</v-icon>
      </v-col>
    </v-row>-->
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import logo from "@/assets/test.png";

import LogForm from "@/components/Login com/LogForm.vue";

import { useI18n  } from 'vue-i18n'
const { locale  } = useI18n({ useScope: 'global' })

const changeLocal = (local) => {
  
  locale.value = local
  console.log(local);
}

</script>

<style>
.footer-style {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
