import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      isCustomElement: (tag) => tag.startsWith('plus-')
    })
  ]
});