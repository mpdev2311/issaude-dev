import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@services/',
        replacement: '/src/core/services/'
      },
      {
        find: '@views/',
        replacement: '/src/views/core/'
      },
      {
        find: '@core/',
        replacement: '/src/core/'
      },
      {
        find: 'core',
        replacement: '/src/core/'
      },
      {
        find: 'services',
        replacement: '/src/core/services/'
      },
      {
        find: 'views',
        replacement: '/src/views/core/'
      },
      
    ]
  }
})
