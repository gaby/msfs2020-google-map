<template>
  <div class="home">
    <a-button @click="startServer">Start server</a-button>
    <a-button @click="stopServer">Stop server</a-button>
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
