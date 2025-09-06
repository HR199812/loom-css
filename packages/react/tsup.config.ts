import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false, // Temporarily disable DTS to fix build issues
  clean: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
});
