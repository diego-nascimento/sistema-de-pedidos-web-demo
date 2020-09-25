import React from 'react'
import {Container, Modal, Formulario, Botao, Campo } from './style'
import api from '../../../services/api'
import {useHistory} from 'react-router-dom';

function Login() {
    const [empresa, setEmpresa] = React.useState([]);
    const [usuario, setUsuario] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const history = useHistory()

    async function feedEmpresa() {
    const response = await api.get('/empresa');

    setEmpresa(response.data);
  }

  React.useEffect(() => {
    feedEmpresa();
  }, [empresa]);

  React.useEffect(()=>{
      localStorage.removeItem('token');
  }, [])


  async function handleLogin(e){
    e.preventDefault();
    try {
        const response = await api.post('/auth', {
            email: usuario,
            password: senha
        }); 
        localStorage.setItem('token', response.data.user.token)
        history.push('/acesso/categorias');
    } catch (error) {
        console.log(error)
    }
    
  }


    return (
        empresa.foto ?
        <Container>
            <Modal>
            <img src={empresa.foto.url} alt={empresa.nome} style={{width: "40%", alignSelf: 'center', marginTop: '50px'}}/>
                <Formulario onSubmit={handleLogin}>
                    <Campo>
                        <label htmlFor="">Usuario</label>
                        <input type="text" value={usuario} onChange={e=> setUsuario(e.target.value)}/>
                    </Campo>
                    <Campo>
                        <label htmlFor="">Senha</label>
                        <input type="password" value={senha} onChange={e=> setSenha(e.target.value)}/>
                    </Campo>
                    <Botao type="submit">Entrar</Botao>
                </Formulario>
            </Modal>
        </Container> 
        : null
    
    )
}

export default Login
