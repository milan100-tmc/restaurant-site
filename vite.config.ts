import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins = [react()]

  // Only load Kimi inspect plugin in development (not in CI/production)
  if (mode === 'development') {
    try {
      const { inspectAttr } = await import('kimi-plugin-inspect-react')
      plugins.unshift(inspectAttr())
    } catch {
      // Plugin not available, skip silently
    }
  }

  return {
    base: './',
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
