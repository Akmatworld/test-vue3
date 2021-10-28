import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.component('show-text', {
    props: ['msg'],
    template: `<h2>{{ msg }}</h2>`
})

app.mount('#app')
