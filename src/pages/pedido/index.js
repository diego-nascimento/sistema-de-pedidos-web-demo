import React, {useEffect} from 'react'
import {Pagina, Container} from './style'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import ProdutoFinalizar from './Components/ProdutosFinalizar'
import FormularioEnvio from './Components/FormularioEnvio'
import {connect} from 'react-redux'
import * as CartActions from '../../store/modules/cart/actions'
function Pedido({dispatch}){
  /*eslint-disable */
  useEffect(()=> {
    
    dispatch(CartActions.PegarCarrinhoLocalStorage())

  }, [])
/*eslint-enabled */
  return(
    <Pagina>
      <Header titulo="Pedido" />
      <Container>
        <ProdutoFinalizar />
        <FormularioEnvio />
      </Container>
      <Footer />
    </Pagina >
  );
}

export default connect()(Pedido);