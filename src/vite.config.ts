import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    Components({
      dirs: ['components/base'],
      extensions: ['vue', 'ts'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@src/',
        replacement: '/',
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
        find: '@pinia/',
        replacement: '/core/_store/',
      },
      {
        find: '@domain/',
        replacement: '/core/domain/',
      },
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
})
