<template>
    <main class="container py-4">
      <form class="w-50 mx-auto" @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input id="email" v-model="email" type="email" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label for="password" class="form-label">Пароль</label>
          <input id="password" v-model="password" type="password" class="form-control" required />
        </div>
  
        <button type="submit" class="btn btn-primary w-100">Увійти</button>
      </form>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  
  const router = useRouter();
  
  async function login() {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email.value,
        password: password.value
      });
  
      localStorage.setItem('user', JSON.stringify({ email: response.data.user.email }));
  
      router.push('/profile');
    } catch (error) {
      alert(error.response?.data?.message || 'Помилка входу.');
    }
  }
  </script>
  
  <style scoped>
  </style>
  