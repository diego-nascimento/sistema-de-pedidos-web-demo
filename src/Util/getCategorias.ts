import { ICategoria } from '../Interfaces/ICategoria'
import api from '../services/api'

export const getCategorias = async ():  Promise<Array<ICategoria>> => {
  const result = await  api.get('categorias')
  const response: Array<ICategoria> = result.data;
  return response;
 
}