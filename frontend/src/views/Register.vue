<template>
    <main class="container py-4">
      <form class="w-50 mx-auto" @submit.prevent="register">
        <div class="mb-3">
          <label for="name" class="form-label">Ім'я</label>
          <input id="name" v-model="name" type="text" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input id="email" v-model="email" type="email" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label for="password" class="form-label">Пароль</label>
          <input id="password" v-model="password" type="password" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label for="gender" class="form-label">Стать</label>
          <select id="gender" v-model="gender" class="form-select" required>
            <option value="">Оберіть стать</option>
            <option>Чоловіча</option>
            <option>Жіноча</option>
          </select>
        </div>
  
        <div class="mb-3">
          <label for="dob" class="form-label">Дата народження</label>
          <input id="dob" v-model="dateOfBirth" type="date" class="form-control" required />
        </div>
  
        <button type="submit" class="btn btn-primary w-100">Зареєструватися</button>
      </form>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const gender = ref('');
  const dateOfBirth = ref('');
  
  const router = useRouter();
  
  async function register() {
    try {
      await axios.post('http://localhost:3000/register', {
        name: name.value,
        email: email.value,
        password: password.value,
        gender: gender.value,
        dateOfBirth: dateOfBirth.value
      });

      localStorage.setItem('user', JSON.stringify({ email: email.value }));
  
      router.push('/profile');
    } catch (error) {
      alert(error.response?.data?.message || 'Помилка реєстрації.');
    }
  }
  </script>
  
  <style scoped>
  </style>
  