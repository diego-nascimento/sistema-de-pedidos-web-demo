import React, { useEffect, useState } from 'react';
import { ListaProdutos, Produto } from './style';
import { connect } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import { ICategoria } from '../../Interfaces/ICategoria';
import { IProduto } from '../../Interfaces/IProduto';
import {getProdutosCategoria} from '../../Util/getProdutosCategoria'

interface ListarProdutosProps{
   categoriaProps: ICategoria
   dispatch: any
}

const ListarProdutos: React.FC<ListarProdutosProps> = ({ categoriaProps, dispatch }) => {
  const [produtos, setProdutos] = useState<Array<IProduto> | null>(null);

  useEffect(() => {
    const FetchProdutos = async () =>{
      const response: Array<IProduto> = await getProdutosCategoria(categoriaProps._id)
      setProdutos(response)
    }
    FetchProdutos()
  }, [categoriaProps._id]);

  function addProduto(produto: IProduto  ){
    dispatch(CartActions.AdicionarAoCarrinho(produto));
  }

  return (
    produtos && <ListaProdutos>
      { produtos.map((produto) => {
        return (
          <Produto key={produto._id} onClick={() => addProduto(produto)}>
            <div className="imagem">
              <img src={produto.foto_id.url} alt="Foto da Categoria" />
            </div>
            <div className="nome-descricao">
              <h3>{produto.nome}</h3>
              <p>{produto.descricao}</p>
              <p style={{ fontWeight: 'bold' }}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(produto.preco)}
              </p>
            </div>
          </Produto>
        );
      })}
    </ListaProdutos>
  );
}

export default connect()(ListarProdutos);
