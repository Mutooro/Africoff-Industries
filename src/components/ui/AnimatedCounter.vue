<template>
  <span>{{ displayValue }}{{ suffix }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  end: number
  suffix?: string
  duration?: number
}>()

const displayValue = ref(0)

onMounted(() => {
  const duration = props.duration || 2000
  const start = performance.now()
  
  const animate = (current: number) => {
    const elapsed = current - start
    const progress = Math.min(elapsed / duration, 1)
    displayValue.value = Math.floor(progress * props.end)
    
    if (progress < 1) requestAnimationFrame(animate)
  }
  
  requestAnimationFrame(animate)
})
</script>