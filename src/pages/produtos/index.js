import React, { useEffect} from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import ListarCategorias from './Components/ListarCategorias'

import Carrinho from './Components/Carrinho'
import {Container, Pagina} from './style'
import {connect} from 'react-redux'
import * as CartActions from '../../store/modules/cart/actions'

function Produtos({dispatch}){
  
/*eslint-disable */
  useEffect(()=> {
    
    dispatch(CartActions.PegarCarrinhoLocalStorage())

  }, [])
/*eslint-enabled */
  return(
    <Pagina>
      <Header titulo="Cardapio"/>
      <Container>
        <ListarCategorias  />
        <Carrinho />
      </Container>
      <Footer />
    </Pagina>
    );
}

export default connect()(Produtos) 