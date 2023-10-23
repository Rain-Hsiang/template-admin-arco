import { loadEnv } from 'vite';

export default function proxyConfig({ mode }) {
  const obj = {};
  if (loadEnv(mode, process.cwd()).VITE_PROXY_OPEN === 'true') {
    obj[loadEnv(mode, process.cwd()).VITE_PROXY_REPLACED] = {
      target: loadEnv(mode, process.cwd()).VITE_API_BASE_URL,
      changeOrigin: true,
      rewrite: (path) =>
        path.replace(
          loadEnv(mode, process.cwd()).VITE_PROXY_REPLACED,
          loadEnv(mode, process.cwd()).VITE_PROXY_SUBSTITUTE
        ),
      // 请求头输出实际路径
      bypass(req, res, options) {
        const proxyUrl =
          new URL(options.rewrite(req.url) || '', options.target as string)
            ?.href || '';
        res.setHeader('x-real-url', proxyUrl);
      },
    };
  }
  return obj;
}
