import React,{useEffect, useState} from 'react'
import Api from '../../../../services/api';
import {Lista} from './style.js'
import ExibirCategoria from '../ExibirCategoria/index'


function ListarCategorias(){
  const [categorias, setCategorias] = useState([])

  useEffect(()=> {
    Api.get('categorias'
    ).then(response => {
      setCategorias(response.data)
    })
  }, [])


  
  return(
    <Lista  >
        {categorias.map(categoria =>{
          return (
            <ExibirCategoria categoria={categoria} key={categoria._id} />
          )
        })}     
    </Lista>
  );
}

export default ListarCategorias;