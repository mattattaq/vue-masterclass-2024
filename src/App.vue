<script setup lang="ts">
import { supabase } from './lib/supaBaseClient';

console.log(supabase)
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
