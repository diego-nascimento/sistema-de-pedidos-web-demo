import produce from 'immer';
import { IProduto } from '../../../Interfaces/IProduto';



export default function cart(state: Array<IProduto> = [] , action: any) {
  switch (action.type) {
    case '@cart/add':
      return produce(state, (draft: Array<IProduto>) => {
        const productIndex = draft.findIndex(
          (produto: IProduto) => produto._id === action.produto._id,
        );
        if (productIndex >= 0) {
          draft[productIndex].quantidade += 1;
        } else {
          draft.push({
            ...action.produto,
            quantidade: 1,
          });
        }
        localStorage.setItem('carrinho', JSON.stringify(draft));
      });
    case '@cart/remove':
      return produce(state, (draft: Array<IProduto>) => {
        const productIndex = draft.findIndex(
          (produto) => produto._id === action.produto,
        );
        if (productIndex >= 0) {
          if (draft[productIndex].quantidade === 1) {
            draft.splice(productIndex, 1);
          } else {
            draft[productIndex].quantidade -= 1;
          }
        }
        localStorage.setItem('carrinho', JSON.stringify(draft));
      });
    case '@cart/localstorage':
      const data = localStorage.getItem('carrinho');
      if (data) {
        return JSON.parse(data);
      } else {
        return state;
      }

    case '@case/clean':
      return [];

    default:
      return state;
  }
}
