import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@services/',
        replacement: '/core/services/',
      },
      {
        find: '@views/',
        replacement: '/views/core/',
      },
      {
        find: '@core/',
        replacement: '/core/',
      },
      {
        find: '@components/',
        replacement: '/components/',
      },
      {
        find: 'core',
        replacement: '/core/',
      },
      {
        find: 'services',
        replacement: '/core/services/',
      },
      {
        find: 'views',
        replacement: '/views/core/',
      },
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
})
