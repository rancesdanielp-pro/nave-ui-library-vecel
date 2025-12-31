import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: {
      index: 'src/react.ts',
    },
    outDir: 'dist/react',
    format: ['esm'],
    dts: {
      resolve: true
    },
    external: ['react', 'react-dom'],
    splitting: false,
    clean: true,
  },
  {
    entry: {
      index: 'src/wc.ts',
    },
    outDir: 'dist/wc',
    format: ['esm'],
    dts: {
      resolve: true,
    },
    splitting: false,
    minify: true,
    clean: false,
  },
]);