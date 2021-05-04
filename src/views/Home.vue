<template>
  <div class="home">
    <Zerodha />
  </div>
</template>

<script>
// @ is an alias to /src
import Zerodha from '@/components/Zerodha.vue'

export default {
  name: 'Home',
  components: {
    Zerodha
  }
}
</script>
