
import { IProduto } from '../Interfaces/IProduto'
import api from '../services/api'

export const getProdutosCategoria = async (categoria: string):  Promise<Array<IProduto>> => {
  const result = await api.get('produtos/categoria', 
  {
    params: {
      categoria_id: categoria,
    }
  })
  const response: Array<IProduto> = result.data;
  return response;
 
}