import { createApp } from 'vue'
import App from './App.vue'
import router from '../router/index.js'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import "quasar/dist/quasar.sass"
import store from '../storage/index.js'


const app = createApp(App)
app.use(Quasar, quasarUserOptions);

app.use(router)
app.use(store)

app.mount('#app')
