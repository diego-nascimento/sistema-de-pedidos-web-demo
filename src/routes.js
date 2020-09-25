import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Pedido from './pages/pedido';
import Produtos from './pages/produtos';
import Finalizado from './pages/finalizado';
import CategoriasAcesso from './pages/UserSide/Categoria';
import Login from './pages/UserSide/login/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Produtos} />
        <Route path="/pedido" component={Pedido} />
        <Route path="/finalizado" component={Finalizado} />
        <Route path="/auth" component={Login} />
        <Route path="/acesso/categorias" component={CategoriasAcesso} />
      </Switch>
    </BrowserRouter>
  );
}
