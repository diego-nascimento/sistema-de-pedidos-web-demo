import React from 'react';
import { Container, Produto} from './style';
import {connect} from 'react-redux'
import { IProduto } from '../../Interfaces/IProduto';

interface ProdutoFinalizarProps{
    produtos: IProduto[]
    total: number
}


 const ProdutosFinalizar: React.FC<ProdutoFinalizarProps> = ({produtos, total})  =>{
  return (
    <Container>
        <div>
            
            <ul>
                {produtos.map((produto: IProduto, index: number) =>{
                    return (
                        <Produto key={produto._id} >
                            <div className ="container-dados">
                                <span>{index + 1}</span>
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

const mapStateToProps = (state: any) => ({
    produtos: state.cart.map((produto: IProduto) =>({
        ...produto,
        subtotal: produto.preco * produto.quantidade
    })),

    total: state.cart.reduce((total:  number, produto: IProduto) => {
        return total + produto.preco * produto.quantidade;
    }, 0),
});

export default connect(mapStateToProps)(ProdutosFinalizar)