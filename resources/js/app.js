// resources/js/app.js
import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Define your routes
const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  // other routes
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create the Inertia app and use the router
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .use(router) // Add Vue Router to the app
      .mount(el);
  },
  progress: {
    color: '#4B5563',
  },
});
