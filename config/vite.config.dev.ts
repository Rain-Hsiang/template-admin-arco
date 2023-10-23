/*
 * @Author: Rain Hsiang rain_f2e@163.com
 * @Date: 2023-10-21 15:20:33
 * @LastEditTime: 2023-10-23 14:40:10
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @FilePath: \template-admin-arco\config\vite.config.dev.ts
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved.
 */
import { mergeConfig, defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';
import proxyConfig from './utils/proxy';

export default defineConfig((configEnv) => {
  return mergeConfig(
    {
      mode: 'development',
      server: {
        open: true,
        fs: {
          strict: true,
        },
        proxy: proxyConfig(configEnv),
      },
      plugins: [
        eslint({
          cache: false,
          include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
          exclude: ['node_modules'],
        }),
      ],
    },
    baseConfig(configEnv)
  );
});
