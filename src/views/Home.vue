<template>
  <div class="home">
    <button @click="startServer">Start server</button>
    <button @click="stopServer">Stop server</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

declare global {
  interface Window {
    ipcRenderer: any
  }
}

export default defineComponent({
  name: 'Home',
  components: {
  },
  methods: {
    startServer: () => {
      window.ipcRenderer.send('startServer')
    },
    stopServer: () => {
      window.ipcRenderer.send('stopServer')
    }
  }
})
</script>
