import api from './api';


interface checkAuthProps{
  token: string
  history: any
}

export const checkAuth = async (token: string, history: any) => {
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
