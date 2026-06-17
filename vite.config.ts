// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Note: inside a Lovable sandbox build the preset is forced to Cloudflare.
// On Vercel CI this override applies and nitro emits `.vercel/output/` which
// Vercel auto-detects — no vercel.json needed.
export default defineConfig({
  nitro: { preset: "vercel" },
});
