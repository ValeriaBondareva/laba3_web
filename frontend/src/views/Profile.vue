<template>
    <main class="container py-4" v-if="userProfile">
      <div class="card w-50 mx-auto">
        <div class="card-body text-center">
          <h3 class="card-title">Ваш профіль</h3>
          <p class="card-text">Ім'я: {{ userProfile.name }}</p>
          <p class="card-text">Email: {{ userProfile.email }}</p>
          <p class="card-text">Стать: {{ userProfile.gender }}</p>
          <p class="card-text">Дата народження: {{ userProfile.dateOfBirth }}</p>
          <button class="btn btn-danger mt-3" @click="logout">Вийти</button>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  
  const userProfile = ref(null);
  const router = useRouter();
  
  async function loadProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      router.push('/login');
      return;
    }
  
    try {
      const response = await axios.get(`http://localhost:3000/profile/${user.email}`);
      userProfile.value = response.data;
    } catch (error) {
      alert('Помилка завантаження профілю.');
      router.push('/login');
    }
  }
  
  function logout() {
    localStorage.removeItem('user');
    router.push('/login');
  }
  
  onMounted(() => {
    loadProfile();
  });
  </script>
  
  <style scoped>
  </style>
  