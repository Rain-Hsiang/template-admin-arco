<!--
 * @Author: 一条死魚 rain_play@163.com
 * @Date: 2023-10-16 15:22:41
 * @LastEditTime: 2023-10-18 10:51:28
 * @LastEditors: 一条死魚 rain_play@163.com
 * @FilePath: \template-admin-arco\src\views\dashboard\workplace\components\banner.vue
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved.
-->
<template>
  <a-col class="banner">
    <a-col :span="8">
      <a-typography-title :heading="5" style="margin-top: 0">
        {{ $t('workplace.welcome') }} {{ userinfo.name }}
      </a-typography-title>
    </a-col>
    <a-divider class="panel-border" />
  </a-col>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { useUserStore } from '@/store';

  const { userinfo } = storeToRefs(useUserStore());
</script>

<style scoped lang="less">
  .banner {
    width: 100%;
    padding: 20px 20px 0 20px;
    background-color: var(--color-bg-2);
    border-radius: 4px 4px 0 0;
  }

  :deep(.arco-icon-home) {
    margin-right: 6px;
  }
</style>
