import React from 'react'
import {Categoria} from './style'
import ListarProdutos from '../ListarProdutos/index';
import {Accordion} from 'react-bootstrap'
import { ICategoria } from '../../Interfaces/ICategoria.js';

interface ListarCategoriasProps{
    categoria: ICategoria
}

const ListarCategorias: React.FC<ListarCategoriasProps> = ({categoria}) =>{
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
                    <ListarProdutos categoriaProps={categoria}/>
            </Accordion.Collapse>
   </Accordion>
  );
}

export default ListarCategorias;