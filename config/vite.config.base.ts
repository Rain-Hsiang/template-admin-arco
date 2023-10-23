/*
 * @Author: Rain Hsiang rain_f2e@163.com
 * @Date: 2023-10-18 13:35:47
 * @LastEditTime: 2023-10-23 13:15:54
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @FilePath: \template-admin-arco\config\vite.config.base.ts
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved.
 */
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import { loadEnv } from 'vite';
import UnoCSS from 'unocss/vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import configArcoStyleImportPlugin from './plugin/arcoStyleImport';

export default ({ mode }) => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      svgLoader({ svgoConfig: {} }),
      configArcoStyleImportPlugin(),
      UnoCSS(),
      createHtmlPlugin({
        inject: { data: { title: loadEnv(mode, process.cwd()).VITE_NAME } },
      }),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, '../src'),
        },
        {
          find: 'assets',
          replacement: resolve(__dirname, '../src/assets'),
        },
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js', // Resolve the i18n warning issue
        },
        {
          find: 'vue',
          replacement: 'vue/dist/vue.esm-bundler.js', // compile template
        },
      ],
      extensions: ['.ts', '.js'],
    },
    define: {
      'process.env': {},
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve(
              'src/assets/style/breakpoint.less'
            )}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
  };
};
