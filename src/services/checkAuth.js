import api from './api';

export const checkAuth = async (token, history) => {
  const Bearer = `Bearer ${token}`;
  try {
    await api.post(
      '/check/auth',
      {},
      {
        headers: {
          Authorization: Bearer,
        },
      },
    );

    return true;
  } catch (error) {
    history.push('/login');
  }
};
