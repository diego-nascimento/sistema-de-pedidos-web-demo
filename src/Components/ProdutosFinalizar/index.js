import React from 'react';
import { Container, Produto} from './style';
import {connect} from 'react-redux'


 function ProdutosFinalizar({produtos, total}) {
  return (
    <Container>
        <div>
            
            <ul>
                {produtos.map(produto =>{
                    return (
                        <Produto key={produto._id} >
                            <div className ="container-dados">
                                <span>{produto.numero}</span>
                                <div className="imagem">
                                    <img src={produto.foto_id.url} alt="Foto da Categoria"/>
                                </div>
                                <div className="nome-descricao">
                                    <h3>{produto.nome}</h3>
                                    <p style={{fontWeight: 'bold'}}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(produto.preco)}</p>
                                    <p>Quantidade: {produto.quantidade}</p>
                                    
                                </div>
                            </div>
                            <h3>Sub-Total: {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(produto.subtotal)}</h3>
                        </Produto>
                    )
                })}
                <h3 className="total">Total: {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total)}</h3>
            </ul>
        </div>
    </Container>
  );
}

const mapStateToProps = state => ({
    produtos: state.cart.map(produto =>({
        ...produto,
        subtotal: produto.preco * produto.quantidade
    })),

    total: state.cart.reduce((total, produto) => {
        return total + produto.preco * produto.quantidade;
    }, 0),
});

export default connect(mapStateToProps)(ProdutosFinalizar)