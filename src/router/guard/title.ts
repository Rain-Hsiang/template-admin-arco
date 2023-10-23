/*
 * @Author: 一条死魚 rain_play@163.com
 * @Date: 2023-10-17 16:24:29
 * @LastEditTime: 2023-10-17 17:54:01
 * @LastEditors: 一条死魚 rain_play@163.com
 * @FilePath: \template-admin-arco\src\router\guard\title.ts
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved.
 */
import type { Router } from 'vue-router';

export default function setupTitleGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    if (to.meta.title) {
      document.title = `${to.meta.title as string} - ${
        import.meta.env.VITE_NAME
      }`;
    } else {
      document.title = `${import.meta.env.VITE_NAME}`;
    }
    next();
  });
}
