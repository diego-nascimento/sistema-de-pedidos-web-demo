import React, {useState} from 'react'
import {Formulario} from './style'
import {BotaoFinalizar} from '../../../produtos/Components/Carrinho/style'
import api from '../../../../services/api'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

function FormularioEnvio({disabled, produtos}){
  const [nome, setNome]= useState('');
  const [telefone, setTelefone]= useState('');
  const [rua, setRua]= useState('');
  const [email, setEmail]= useState('');
  const [numero, setNumero]= useState('');
  const [bairro, setBairro]= useState('');
  const [cidade, setCidade]= useState('');
  const [observacao, setObservacao] = useState('');
  const [meio_pagamento, setMeio_Pagamento] = useState('cartao de credito');

  const history = useHistory();
  


  async function ConcluirPedido(e){
    e.preventDefault();
    
     const resposta = await api.post('/pedido', {
       produtos, 
       email,
       nome, 
       telefone, 
       rua, 
       numero, 
       bairro, 
       cidade, 
       observacao, 
       meio_pagamento
    })

    if(resposta && resposta.status === 200){
      history.push({
        pathname: '/finalizado'
      })
    }else{
      alert('Erro ao realizar o pedido!')
    }
  }
  
  return (
    <Formulario onSubmit={ConcluirPedido}>
        <h2>Dados de Envio</h2>
          <input type="text" placeholder="Digite o Nome Aqui" className="outside"  value={nome} required onChange={e=> setNome(e.target.value)}/>
          <input type="tel" placeholder="Telefone" className="outside"  value={telefone} required onChange={e=> setTelefone(e.target.value)}/>
          <input type="email" placeholder="Digite seu e-mail aqui" className="outside"  value={email} required onChange={e=> setEmail(e.target.value)}/>
          <div className="endereco">
            <input type="text" placeholder="Rua"className="inside"  value={rua} required onChange={e=> setRua(e.target.value)}/>
            <input type="text" placeholder="Número"className="inside"  value={numero} required onChange={e=> setNumero(e.target.value)}/>
          </div>
          <input type="text" placeholder="Bairro" className="outside"  value={bairro} required onChange={e=> setBairro(e.target.value)}/>
          <input type="text" placeholder="Cidade" className="outside"  value={cidade} required onChange={e=> setCidade(e.target.value)}/>
          <select   required onChange={e=> setMeio_Pagamento(e.target.value)}>
            <option value="cartao de credito">Cartao de Credito</option>
            <option value="cartao de debito">Cartao de Debito</option>
            <option value="dinheiro">Em Dinheiro</option>
          </select>
          <textarea  placeholder="Alguma duvida ou algo mais a informar?"value = {observacao} required onChange={e => setObservacao(e.target.value)}></textarea>
          
        <BotaoFinalizar type="submit" className="tamanho-botao" disabled={disabled}>Finalizar Pedido</BotaoFinalizar>
    </Formulario>
  );
}


const mapStateToProps = state => ({
  produtos: state.cart,
  disabled: state.cart.length > 0 ? 0: 1,
});

export default connect(mapStateToProps)(FormularioEnvio)
