import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  build: {
    target: "es2022",
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id: string): string | void {
          const norm = id.replace(/\\/g, "/");
          if (
            norm.includes("node_modules/react/") ||
            norm.includes("node_modules/react-dom/") ||
            norm.includes("node_modules/scheduler/")
          ) {
            return "vendor-react";
          }
          if (
            norm.includes("node_modules/@tanstack/react-router/") ||
            norm.includes("node_modules/@tanstack/router-core/")
          ) {
            return "vendor-router";
          }
        },
      },
    },
  },
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({
      preset: "vercel",
      vercel: {
        functions: {
          runtime: "nodejs22.x",
        },
      },
    }),
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
});
