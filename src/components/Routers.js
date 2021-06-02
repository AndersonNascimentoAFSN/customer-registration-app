import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ClientsRegistered from '../pages/ClientsRegistered';

export default function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route path="/login" component={ Login }/>
      <Route path="/cadastro" component={ Register }/>
      <Route path="/clientes-cadastrados" component={ ClientsRegistered }/>
    </Switch>
  )
}
