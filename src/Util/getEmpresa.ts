import { IEmpresa } from '../Interfaces/IEmpresa'
import api from '../services/api'

export const getEmpresa = async (): Promise<IEmpresa> =>{
  const result = await api.get('/empresa')
  const response: IEmpresa = result.data
  return response;
}