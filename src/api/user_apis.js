import api from '.';

async function login(body) {
  return await api('post', '/user/login', body, { auth: false });
}

export { login };
