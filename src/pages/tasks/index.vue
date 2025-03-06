<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { supabase } from '@/lib/supaBaseClient';
import { ref } from 'vue';
import type { Tables } from '../../../database/types';

const tasks = ref<Tables<'tasks'>[] | null>(null);

(async () => {
  const { data, error } = await supabase.from('tasks').select()
  if (error) {
    console.log(error)
  }
  tasks.value = data;
  console.log('Projects: ', tasks.value)
  return data;
})()
</script>

<template>
  <main>
    <div>
      <h1>Tasks Page</h1>
      <a href="/">Home</a>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          {{ task.name }}
        </li>
      </ul>
    </div>
  </main>
</template>
