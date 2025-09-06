import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false, // Temporarily disable DTS to avoid build issues
  clean: true,
  sourcemap: true,
  external: ['vue'],
});
