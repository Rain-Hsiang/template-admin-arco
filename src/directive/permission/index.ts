/*
 * @Author: 一条死魚 rain_play@163.com
 * @Date: 2023-10-16 15:22:41
 * @LastEditTime: 2023-10-18 10:59:26
 * @LastEditors: 一条死魚 rain_play@163.com
 * @FilePath: \template-admin-arco\src\directive\permission\index.ts
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved.
 */
import { DirectiveBinding } from 'vue';
import { useUserStore } from '@/store';
import { storeToRefs } from 'pinia';

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  const { value } = binding;
  const { userinfo } = storeToRefs(useUserStore());
  const { role } = userinfo.value;

  if (Array.isArray(value)) {
    if (value.length > 0) {
      const permissionValues = value;

      const hasPermission = permissionValues.includes(role);
      if (!hasPermission && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','user']"`);
  }
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
};
