import { defineConfig } from '@rsbuild/core';
   import { pluginReact } from '@rsbuild/plugin-react';

   export default defineConfig({
     plugins: [pluginReact()],
     output: {
       distPath: {
         root: 'dist',
         js: 'static/js',
         css: 'static/css',
         image: 'static/images',
         fonts: 'static/fonts',
       },
     },
     tools: {
       rspack: {
         optimization: {
           splitChunks: {
             cacheGroups: {
               vendor: {
                 test: /[\\/]node_modules[\\/]/,
                 name: 'vendors',
                 chunks: 'all',
               },
             },
           },
         },
       },
     },
   });
