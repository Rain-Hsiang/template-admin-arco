/*
 * @Author: 一条死魚 rain_play@163.com
 * @Date: 2023-10-16 15:22:41
 * @LastEditTime: 2023-10-18 12:33:49
 * @LastEditors: 一条死魚 rain_play@163.com
 * @FilePath: \template-admin-arco\src\store\modules\user\index.ts
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved.
 */

import { ref } from 'vue';
import { defineStore } from 'pinia';
import {
  login as userLogin,
  logout as userLogout,
  getUserInfo,
  LoginData,
} from '@/api/user';
import { removeRouteListener } from '@/utils/route-listener';
import { UserState } from './types';
import useAppStore from '../app';

const useUserStore = defineStore(
  'user',
  () => {
    const appStore = useAppStore();

    const infoDefault: UserState = {
      name: undefined,
      avatar: undefined,
      job: undefined,
      organization: undefined,
      location: undefined,
      email: undefined,
      introduction: undefined,
      personalWebsite: undefined,
      jobName: undefined,
      organizationName: undefined,
      locationName: undefined,
      phone: undefined,
      registrationDate: undefined,
      accountId: undefined,
      certification: undefined,
      role: '',
    };

    const token = ref('');
    const userinfo = ref(infoDefault);

    const info = async () => {
      const res = await getUserInfo();
      userinfo.value = res.data;
    };
    const login = async (loginForm: LoginData) => {
      try {
        const res = await userLogin(loginForm);
        token.value = res.data.token;
      } catch (err) {
        token.value = '';
        throw err;
      }
    };
    const logout = async () => {
      try {
        await userLogout();
      } finally {
        userinfo.value = infoDefault;
        token.value = '';
        removeRouteListener();
        appStore.clearServerMenu();
      }
    };

    return { token, userinfo, info, login, logout };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          storage: localStorage,
        },
      ],
    },
  }
);

export default useUserStore;
