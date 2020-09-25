import React, {useState} from 'react';
import { Container, Produto, BotaoFinalizar, BotaoCarrinho, Modal } from './style';
import {useHistory} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import {connect} from 'react-redux'
import * as CartActions from '../../../../store/modules/cart/actions'

 function Carrinho({produtos, tamanho_carrinho, total, disabled, scroll, dispatch}) { 
    const history = useHistory();
    const [mostrarCarrinho, setMostrarCarrinho] = useState(0)
   

  function MostrarCarrinho(){
    if(mostrarCarrinho === 1){
      setMostrarCarrinho(0)
      document.body.classList.toggle('is-locked', mostrarCarrinho);
    }else{
      setMostrarCarrinho(1)
      document.body.classList.toggle('is-locked', mostrarCarrinho);
    }  
}

    function Finalizar(){
        if(produtos.length > 0){
            history.push('/pedido')
        } 
    }
    
  return (
    <>
        <Modal mostrar={mostrarCarrinho}></Modal>
        <BotaoCarrinho onClick={MostrarCarrinho}>
            <FaShoppingCart />
            <div>
                <div className="numeroProdutos">
                    <p>{tamanho_carrinho}</p>
                </div>
            </div>
            
        </BotaoCarrinho>
        <Container scroll= {scroll} mostrar={mostrarCarrinho}>
            <div>
                <h2>Meu Pedido</h2>
                <h3>Total: {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total)}</h3>
                <ul>
                    {produtos.map(produto =>{
                        return (
                            <Produto key={produto._id} >
                                <img src={produto.foto_id.url} alt="Foto da Categoria"/>
                                <div className="nome-descricao">
                                    <h3>{produto.nome}</h3>
                                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(produto.preco)}</p>
                                    
                                    <p>Quantidade: {produto.quantidade}</p>
                                    <h3>SubTotal: {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(produto.subtotal)}</h3>
                                </div>
                                <button onClick={e => dispatch(CartActions.RemoverDoCarrinho(produto._id))} >Remover</button>
                            </Produto> 
                        )
                    })}
                </ul>
            </div>

            <BotaoFinalizar onClick={Finalizar} disabled={disabled} >Finalizar</BotaoFinalizar>
        </Container>
    </>
  );
}

const  mapStateToProps = state => ({
    produtos: state.cart.map(produto =>({
        ...produto,
        subtotal: produto.preco * produto.quantidade
    })),

    tamanho_carrinho: state.cart.length,

    total: state.cart.reduce((total, produto) => {
        return total + produto.preco * produto.quantidade;
    }, 0),

    Scroll: state.cart.length > 7 ? 1: 0,
    
    disabled: state.cart.length > 0 ? 0: 1,

});

export default connect(mapStateToProps)(Carrinho)