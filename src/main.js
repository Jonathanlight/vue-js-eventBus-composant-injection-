import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('async-component', function(resolve) {
    setTimeout(() => {
        resolve({
            template: '<div> Async Component </div>'
        })
    }, 3000)
});

new Vue({
    data: {
        versionApp: '1.0.2'
    },
    render: h => h(App),
}).$mount('#app')