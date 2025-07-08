// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
});