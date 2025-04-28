<template>
    <main class="container py-4">
      <div class="row">
        <div class="col-md-6 offset-md-3 text-center">
          <div class="btn-group mb-3" role="group">
            <router-link to="/" class="btn btn-secondary">Звичайний режим</router-link>
            <button type="button" class="btn btn-primary">Режим для програміста</button>
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
  
  function press(value) {
    if (display.value === '0') {
      display.value = value;
    } else {
      display.value += value;
    }
  }
  
  function pressOperation(operator) {
    display.value += operator;
  }
  
  function clear() {
    display.value = '0';
  }
  
  function calculate() {
    try {
      const replaced = display.value.replace(/[A-F]/g, (char) => parseInt(char, 16));
  
      const result = eval(replaced);
  
      display.value = result >= 10 ? result.toString(16).toUpperCase() : result.toString();
    } catch {
      display.value = 'Error';
    }
  }
  
  const buttons = [
    { text: 'A', class: 'btn-secondary', action: () => press('A') },
    { text: 'B', class: 'btn-secondary', action: () => press('B') },
    { text: 'C', class: 'btn-secondary', action: () => press('C') },
    { text: 'D', class: 'btn-secondary', action: () => press('D') },
  
    { text: 'E', class: 'btn-secondary', action: () => press('E') },
    { text: 'F', class: 'btn-secondary', action: () => press('F') },
    { text: '1', class: 'btn-secondary', action: () => press('1') },
    { text: '0', class: 'btn-secondary', action: () => press('0') },
  
    { text: '+', class: 'btn-primary', action: () => press('+') },
    { text: '-', class: 'btn-primary', action: () => press('-') },
    { text: 'AND', class: 'btn-primary', action: () => pressOperation('&') },
    { text: 'OR', class: 'btn-primary', action: () => pressOperation('|') },
  
    { text: 'CLR', class: 'btn-danger', action: clear },
    { text: '=', class: 'btn-success', action: calculate },
  ];
  </script>
  
  <style scoped>
  </style>
  