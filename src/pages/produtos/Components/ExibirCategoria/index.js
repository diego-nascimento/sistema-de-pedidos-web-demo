import React, {useState} from 'react'
import {Categoria} from './style.js'
import ListarProdutos from '../ListarProdutos/index';

function ListarCategorias({categoria}){
    const [mostrar, setMostrar] = useState(0)

    function ExibirProdutos(){
        if(mostrar === 1){
            setMostrar(0)
        }else{
            setMostrar(1)
        }
    }
  return(
    <>
        <Categoria  onClick ={ExibirProdutos}>
            <div className="imagem">
                <img src={categoria.foto_id.url} alt="Foto da Categoria" />
            </div>
            <div className="nome-descricao">
                <h3>{categoria.nome}</h3>
                <p>{categoria.descricao}</p>
            </div>
        </Categoria>
        <ListarProdutos categoria={categoria} mostrar={mostrar}/>
   </>
  );
}

export default ListarCategorias;