import inject from '@rollup/plugin-inject';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import { viteExternalsPlugin } from 'vite-plugin-externals';

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      $: 'jquery',
    }),
    react(),
  ],
  mode: isProd ? 'production' : 'development',
  esbuild: {
    exclude: ['jquery'],
    platform: 'browser',
  },
  build: {
    outDir: './checkout-ui-custom',
    minify: isProd ? true : false,
    assetsDir: './',
    rollupOptions: {
      external: ['jquery'],
      output: {
        entryFileNames: 'checkout6-custom.js',
        assetFileNames: 'checkout6-custom.css',
        chunkFileNames: 'checkout6-custom.js',
      },
    },
    /*
    terserOptions: {
      compress: {
        keep_classnames: true,
        keep_fnames: true,
        pure_funcs: ['console.table', 'console.debug', 'console.log'],
      },
    },
    */
  }
});
