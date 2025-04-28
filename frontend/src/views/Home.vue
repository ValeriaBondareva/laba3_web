<template>
    <main class="container py-4">
      <div class="row">
        <div class="col-md-6 offset-md-3 text-center">
          <div class="btn-group mb-3" role="group">
            <button type="button" class="btn btn-primary">Звичайний режим</button>
            <router-link to="/progcalc" class="btn btn-secondary">Режим для програміста</router-link>
          </div>
  
          <div class="calculator border p-3 bg-light">
            <input 
              type="text" 
              class="form-control mb-2 text-end" 
              :value="display" 
              readonly
            />
  
            <div class="row g-2">
              <div class="col-3" v-for="btn in buttons" :key="btn.text">
                <button
                  class="btn w-100"
                  :class="btn.class"
                  @click="btn.action"
                >
                  {{ btn.text }}
                </button>
              </div>
            </div>
  
          </div>
  
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const display = ref('0');
  
  // Функция для добавления цифр и операторов
  function press(value) {
    if (display.value === '0') {
      display.value = value;
    } else {
      display.value += value;
    }
  }
  
  function clear() {
    display.value = '0';
  }
  
  function calculate() {
    try {
      display.value = eval(display.value).toString();
    } catch {
      display.value = 'Error';
    }
  }
  
  const buttons = [
    { text: '7', class: 'btn-secondary', action: () => press('7') },
    { text: '8', class: 'btn-secondary', action: () => press('8') },
    { text: '9', class: 'btn-secondary', action: () => press('9') },
    { text: 'C', class: 'btn-danger', action: clear },
  
    { text: '4', class: 'btn-secondary', action: () => press('4') },
    { text: '5', class: 'btn-secondary', action: () => press('5') },
    { text: '6', class: 'btn-secondary', action: () => press('6') },
    { text: '+', class: 'btn-primary', action: () => press('+') },
  
    { text: '1', class: 'btn-secondary', action: () => press('1') },
    { text: '2', class: 'btn-secondary', action: () => press('2') },
    { text: '3', class: 'btn-secondary', action: () => press('3') },
    { text: '-', class: 'btn-primary', action: () => press('-') },
  
    { text: '0', class: 'btn-secondary col-6', action: () => press('0') },
    { text: '.', class: 'btn-secondary', action: () => press('.') },
    { text: '=', class: 'btn-success', action: calculate },
  ];
  </script>
  
  <style scoped>
  </style>
  