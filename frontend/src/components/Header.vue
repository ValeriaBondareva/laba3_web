<template>
    <header class="bg-primary text-white text-center py-3">
      <h1>Калькулятор "CodeCalc"</h1>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link" active-class="fw-bold active">Головна</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link" active-class="fw-bold active">Про додаток</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/profile" class="nav-link" active-class="fw-bold active">Профіль</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link" active-class="fw-bold active">Вхід</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/register" class="nav-link" active-class="fw-bold active">Реєстрація</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  </script>
  