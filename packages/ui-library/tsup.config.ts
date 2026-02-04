import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: {
      index: 'src/index.ts',
    },
    outDir: 'dist/react',
    format: ['esm'],
    dts: {
      resolve: false
    },
    external: [
      'react', 
      'react-dom', 
      'next', 
      'next/link', 
      'next/navigation',
      'lucide-react'
    ],
    splitting: false,
    clean: true,
    platform: 'browser',
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