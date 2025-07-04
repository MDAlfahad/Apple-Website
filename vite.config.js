import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "education-we9",
    project: "javascript-react",
    base: "Apple-Website"
  })],

  build: {
    sourcemap: true
  }
})
