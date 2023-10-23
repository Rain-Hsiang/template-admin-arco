<!--
 * @Author: 一条死魚 rain_play@163.com
 * @Date: 2023-10-16 15:22:41
 * @LastEditTime: 2023-10-23 08:26:16
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @FilePath: \template-admin-arco\src\views\login\index.vue
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved.
-->
<template>
  <div class="containers">
    <div class="logo">
      <img class="w-33px h-33px rounded" alt="logo" :src="viteLogo" />
      <div class="logo-text" text="!#1d2129" lg="!text-#f7f8fa">
        {{ viteName }}
      </div>
    </div>
    <LoginBanner class="!hidden" lg="!flex" />
    <div class="content">
      <div class="content-inner">
        <LoginForm />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Footer from '@/components/footer/index.vue';
  import LoginBanner from './components/banner.vue';
  import LoginForm from './components/login-form.vue';

  const viteLogo = new URL(import.meta.env.VITE_LOGO, import.meta.url).href;
  const viteName = import.meta.env.VITE_NAME;
</script>

<style lang="less" scoped>
  .containers {
    display: flex;
    height: 100vh;

    .banner {
      width: 550px;
      background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
    }

    .content {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      padding-bottom: 40px;
    }

    .footer {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
    }
  }

  .logo {
    position: fixed;
    top: 24px;
    left: 22px;
    z-index: 1;
    display: inline-flex;
    align-items: center;

    &-text {
      margin-right: 4px;
      margin-left: 4px;
      color: var(--color-fill-1);
      font-size: 20px;
    }
  }
</style>

<style lang="less" scoped>
  // responsive
  @media (max-width: @screen-lg) {
    .containers {
      .banner {
        width: 25%;
      }
    }
  }
</style>
