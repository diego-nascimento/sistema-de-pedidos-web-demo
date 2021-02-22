import React, { useEffect, useState } from 'react';
import { Lista } from './style';
import ExibirCategoria from '../ExibirCategoria/index';
import {ICategoria} from '../../Interfaces/ICategoria'
import { getCategorias } from '../../Util/getCategorias';

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Array<ICategoria> | null>(null);

  useEffect(() => {
    const FetchCategorias = async ()=>{
      const response: Array<ICategoria> = await getCategorias();
      setCategorias(response)
    }
    FetchCategorias()
   
  }, []);

  return (
    <Lista>
      {categorias && categorias.map((categoria) => {
        return <ExibirCategoria categoria={categoria} key={categoria._id} />;
      })}
    </Lista>
  );
}

export default ListarCategorias;
