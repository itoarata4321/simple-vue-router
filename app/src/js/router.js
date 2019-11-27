import Vue from 'vue'
import Router from 'vue-router'

import page1 from './components/pages/Page1'
import page2 from './components/pages/Page2'
import nav from './components/Nav'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: nav,
        },
        {
            path: '/color-buttons',
            components: {
                default: page1,
                nav: nav,
            }
        },
        {
            path: '/page1',
            components: {
                default: page1,
                nav: nav,
            }
        },
        {
            path: '/page2',
            components: {
                default: page2,
                nav: nav,
            }
        },
    ]
});
