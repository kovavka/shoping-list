<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { ALL_ITEMS } from '@/data/items.ts'

const count = ref(0)
const items = ref([
  {
    id: 101,
    count: 1,
  },
  {
    id: 102,
    count: 3,
  },
])

// const t = computed(() => {
//
// })

const update = () => {
  count.value++
}
</script>

<template>
  <div v-for="item in items" :key="item.id">{{ ALL_ITEMS[item.id].name }} – {{ item.count }}</div>

  <input />
  <button v-on:click="update">Add</button>
</template>

<style scoped></style>
