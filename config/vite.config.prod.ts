/*
 * @Author: Rain Hsiang rain_f2e@163.com
 * @Date: 2023-10-21 15:20:33
 * @LastEditTime: 2023-10-23 11:30:03
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @FilePath: \template-admin-arco\config\vite.config.prod.ts
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved.
 */
import { mergeConfig, defineConfig } from 'vite';
import baseConfig from './vite.config.base';
import configCompressPlugin from './plugin/compress';
import configVisualizerPlugin from './plugin/visualizer';
import configArcoResolverPlugin from './plugin/arcoResolver';
import configImageminPlugin from './plugin/imagemin';

export default defineConfig((configEnv) => {
  return mergeConfig(
    {
      mode: 'production',
      plugins: [
        configCompressPlugin('gzip'),
        configVisualizerPlugin(),
        configArcoResolverPlugin(),
        configImageminPlugin(),
      ],
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              arco: ['@arco-design/web-vue'],
              chart: ['echarts', 'vue-echarts'],
              vue: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vue-i18n'],
            },
          },
        },
        chunkSizeWarningLimit: 2000,
      },
    },
    baseConfig(configEnv)
  );
});
