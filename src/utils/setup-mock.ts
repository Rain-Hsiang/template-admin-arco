/*
 * @Author: Rain Hsiang rain_f2e@163.com
 * @Date: 2023-10-21 15:20:33
 * @LastEditTime: 2023-10-23 13:45:03
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @FilePath: \template-admin-arco\src\utils\setup-mock.ts
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved.
 */

export default ({
  mock = true,
  setup,
}: {
  mock?: boolean;
  setup: () => void;
}) => {
  if (
    mock &&
    import.meta.env.MODE !== 'production' &&
    import.meta.env.VITE_MOCK_OPEN === 'true'
  ) {
    setup();
  }
};

export const successResponseWrap = (data: unknown) => {
  return {
    data,
    status: 'ok',
    msg: '请求成功',
    code: 20000,
  };
};

export const failResponseWrap = (data: unknown, msg: string, code = 50000) => {
  return {
    data,
    status: 'fail',
    msg,
    code,
  };
};
