import React,{useEffect, useState} from 'react'
import Api from '../../../../services/api';
import {ListaProdutos, Produto} from './style'
import {connect} from 'react-redux'
import * as CartActions from '../../../../store/modules/cart/actions'


function ListarProdutos(props){
  const [produtos, setProdutos] = useState([])
  const [categoria, setCategoria] = useState(props.categoria._id)


  useEffect(()=> {
    setCategoria(props.categoria._id)
  }, [props.categoria])
  
  useEffect(()=> {
    Api.get('produtos/categoria', {
        params: {
            categoria_id: categoria
        }
    }
    ).then(response => {
      setProdutos(response.data)
    })
  }, [categoria])
 
  function addProduto(produto){
    const {dispatch} = props
    dispatch(CartActions.AdicionarAoCarrinho(produto))
  }
  
  return(
    
    <ListaProdutos  quantidade={produtos.length} mostrar={props.mostrar}>
        {produtos.map(produto =>{
          return (
            <Produto key={produto._id} onClick={e => addProduto(produto)}>
              <div className="imagem">
                <img src={produto.foto_id.url} alt="Foto da Categoria"/>
              </div>
              <div className="nome-descricao">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <p style={{fontWeight: 'bold'}}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(produto.preco)}</p>
              </div>
            </Produto>
          )
        })}
      </ListaProdutos>
  );
}



export default connect()(ListarProdutos);