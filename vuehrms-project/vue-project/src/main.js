import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createI18n } from 'vue-i18n'
loadFonts()

const messages = {
  en: {
      login: 'Login',
      Email:'E-mail',

  },
  ar: {
    login:'تسجيل الدخول',
    Email: ' البريدالالكترون',
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'ar',
  fallbackLocale: 'ar', 
  messages
})



createApp(App)
  .use(router)
  .use(i18n)
  .use(vuetify)
  .mount('#app')
