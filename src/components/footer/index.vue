<template>
  <a-layout-footer class="footer">{{ viteFooter }}</a-layout-footer>
</template>

<script lang="ts" setup>
  const viteFooter = import.meta.env.VITE_FOOTER;
</script>

<style lang="less" scoped>
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    color: var(--color-text-2);
    text-align: center;
  }
</style>
