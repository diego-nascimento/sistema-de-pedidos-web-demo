import React from 'react';
import api from '../../../services/api';
import { checkAuth } from '../../../services/checkAuth';
import { useHistory, Link } from 'react-router-dom';

import { Item, Lista, Container, Botao } from './style';

const Categorias = (props) => {
  const [categorias, setCategorias] = React.useState([]);
  const history = useHistory();

  async function recuperarCategorias() {
    try {
      const catData = await api.get('/categorias');

      if (catData) {
        setCategorias(catData.data);
      }
    } catch (error) {
      alert('Erro ao carregar dados');
    }
  }

  React.useEffect(() => {
    recuperarCategorias();
  }, []);

  React.useEffect(() => {
    checkAuth(localStorage.getItem('token'), history);
  });

  console.log(categorias)
  return (
    <Container>
      <h1>Categorias</h1>
      <Link to="/acesso/categorias/novo">
        <Botao color="black" background="white" size="250px" hover="#EEE">
          Novo
        </Botao>
      </Link>
      {categorias ? (
        <Lista>
          {categorias.map((categoria) => {
            return (
              <Item key={categoria._id}>
                <img src={categoria.foto_id.url} alt={categoria.nome} />
                <h2>{categoria.nome}</h2>
                <p>{categoria.descricao}</p>
                <div className="botoes">
                  <Botao
                    color="white"
                    background="#888"
                    size="40%"
                    hover="#777"
                  >
                    Visualizar
                  </Botao>
                  <Botao
                    color="white"
                    background="#888"
                    size="40%"
                    hover="#777"
                  >
                    Alterar
                  </Botao>
                </div>
              </Item>
            );
          })}
        </Lista>
      ) : (
        <h1>Carregando...</h1>
      )}
    </Container>
  );
};

export default Categorias;
