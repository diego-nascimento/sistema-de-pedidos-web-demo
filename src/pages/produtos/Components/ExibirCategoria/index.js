import React from 'react'
import {Categoria} from './style.js'
import ListarProdutos from '../ListarProdutos/index';
import {Accordion} from 'react-bootstrap'

function ListarCategorias({categoria}){
  return(
     <Accordion>
             <Accordion.Toggle  variant="link" as={Categoria} eventKey={`${categoria._id}`}>
                    <div className="imagem">
                        <img src={categoria.foto_id.url} alt="Foto da Categoria" />
                    </div>
                    <div className="nome-descricao">
                        <h3>{categoria.nome}</h3>
                        <p>{categoria.descricao}</p>
                    </div>
            </Accordion.Toggle>
                <Accordion.Collapse eventKey={`${categoria._id}`}>
                    <ListarProdutos categoria={categoria}/>
            </Accordion.Collapse>
   </Accordion>
  );
}

export default ListarCategorias;