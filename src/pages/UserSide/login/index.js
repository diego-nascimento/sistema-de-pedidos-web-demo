import React from 'react';
import { Login, Modal, Campo,  Formulario, Botao, Entrada, Mensagem } from './styles';
import logo from '../../../assets/logo-teste.png';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';


function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();
  const [empresa, setEmpresa] = React.useState('');
  const [incorrect, setIncorrect] = React.useState(false);


  async function feedEmpresa() {
    const response = await api.get('/empresa');

    setEmpresa(response.data);
  }

  React.useEffect(() => {
    feedEmpresa();
  }, [empresa]);

  React.useEffect(() => {
    localStorage.removeItem('token');
  }, []);

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await api.post('/auth', {
        email,
        password,
      });

      localStorage.setItem('token', response.data.user.token);
      history.push('/acesso/categorias');
    } catch (error) {
      setIncorrect(true);
      setTimeout(() => {
        setIncorrect(false);
      }, 5000)
    }
  }

  return empresa.foto ? (
    <> <Login>
    <Modal>
      <img src={logo} style={{width: "50%"}} alt="logo"/>
      <Formulario onSubmit={handleLogin}>
        {incorrect ? <Mensagem>Usuario ou senha Incorretos</Mensagem> : null}
        <Campo>
          <label htmlFor="email">Email</label>
          <Entrada
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </Campo>
        <Campo>
          <label htmlFor="senha">Senha</label>
          <Entrada
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="senha"
          />
        </Campo>
        <Botao type="submit">Login</Botao>
      </Formulario>
    </Modal>
  </Login >
  </>
  ) : null;
}

export default LoginPage;
