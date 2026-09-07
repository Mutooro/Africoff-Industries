<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  src: string
  alt: string
  fallbackSrc?: string
  loading?: 'lazy' | 'eager'
}>(), {
  fallbackSrc: '/assets/images/3.jfif',
  loading: 'lazy',
})

const currentSrc = ref(props.src)

function useFallback() {
  if (currentSrc.value !== props.fallbackSrc) {
    currentSrc.value = props.fallbackSrc
  }
}

watch(() => props.src, source => {
  currentSrc.value = source
})
</script>

<template>
  <img :src="currentSrc" :alt="alt" :loading="loading" @error="useFallback" />
</template>
