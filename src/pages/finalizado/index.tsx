import React, { useEffect } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { Pagina, Container } from './style';
import { MdDone } from 'react-icons/md';
import { connect } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';

interface FinalizadoProps{
  dispatch: any
}

const Finalizado: React.FC<FinalizadoProps> = (props) => {
  /*eslint-disable */
  useEffect(() => {
    localStorage.clear();
    const { dispatch } = props;
    dispatch(CartActions.LimparCarrinho());
  }, []);
  /*eslint-enabled */

  return (
    <Pagina>
      <Header />
      <Container>
        <MdDone />
        <h2>Pedido Finalizado!</h2>
        <div className="numeroPedido">
          <h3>Seu pedido foi registrado e será preparado em breve!</h3>
        </div>
      </Container>
      <Footer />
    </Pagina>
  );
}

export default connect()(Finalizado);
