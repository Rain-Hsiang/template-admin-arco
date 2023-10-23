const isLogin = () => {
  const user = localStorage.getItem('user') || '{}';
  const { token } = JSON.parse(user);
  return !!token;
};

const getToken = () => {
  const user = localStorage.getItem('user') || '{}';
  const { token } = JSON.parse(user);
  return token;
};

export { isLogin, getToken };
