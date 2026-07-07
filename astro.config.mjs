// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://danntmt.github.io',
  base: '/randy-barbershop-web/',
  vite: {
    plugins: [tailwindcss()]
  }
});