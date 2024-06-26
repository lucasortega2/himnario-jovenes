import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import db from '@astrojs/db';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db(), react()],
  output: 'static',
  // adapter: vercel(),
});
