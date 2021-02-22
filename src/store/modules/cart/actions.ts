import { IProduto } from "../../../Interfaces/IProduto"

export function AdicionarAoCarrinho(produto: IProduto){
  return {
    type: '@cart/add',
    produto
  }
}

export function RemoverDoCarrinho(produto: string){
  return {
    type: '@cart/remove', 
    produto: produto
  }
}

export function PegarCarrinhoLocalStorage(){
  return {
    type: '@cart/localstorage'
  }
}

export function LimparCarrinho(){
  return {
    type: '@cart/clean'
  }
}



