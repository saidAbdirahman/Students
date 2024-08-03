<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label>Email:</label>
          <input v-model="email" type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input v-model="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        axios.post('/api/login', { email: this.email, password: this.password })
          .then(response => {
            console.log('Logged in:', response.data);
          })
          .catch(error => {
            console.error('Error:', error.response.data);
          });
      },
    },
  };
  </script>
  