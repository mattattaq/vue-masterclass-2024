<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { supabase } from '@/lib/supaBaseClient';
import { ref } from 'vue';
import type { Tables } from '../../../database/types';

const projects = ref<Tables<'projects'>[] | null>(null);

(async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) {
    console.log(error)
  }
  projects.value = data;
  console.log('Projects: ', projects.value)
  return data;
})()
</script>

<template>
  <main>
    <div>
      <h1>Projects Page</h1>
      <a href="/">Home</a>
      <ul>
        <li v-for="project in projects" :key="project.id">
          {{ project }}
        </li>
      </ul>
    </div>
  </main>
</template>
