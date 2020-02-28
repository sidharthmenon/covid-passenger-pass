import Vue from 'vue'
import VueMeta from 'vue-meta'
import { InertiaApp } from '@inertiajs/inertia-vue'
import route from 'ziggy'


Vue.config.productionTip = false

Vue.use(InertiaApp)
Vue.use(VueMeta)


Vue.mixin({
  methods: {
    route: route
  }
});


const app = document.getElementById('app')

new Vue({
  metaInfo: {
    titleTemplate: (title) => title ? `${title} - Portal` : 'Portal'
  },
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name =>
        import (`./Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(app)