import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Registro from './pages/Registro';
import Entrar from './pages/Entrar';
import Menu from './pages/Menu';

import RemediosNovo from './pages/Remedios/Novo';
import RemediosVisualizar from './pages/Remedios/Visualizar';
import RemediosEditar from './pages/Remedios/Editar';
import RemediosExcluir from './pages/Remedios/Excluir';

import ObjetosNovo from './pages/Objetos/Novo';
import ObjetosVisualizar from './pages/Objetos/Visualizar';
import ObjetosEditar from './pages/Objetos/Editar';
import ObjetosExcluir from './pages/Objetos/Excluir';

import RotinaNovo from './pages/Rotina/Novo';
import RotinaVisualizar from './pages/Rotina/Visualizar';
import RotinaEditar from './pages/Rotina/Editar';
import RotinaExcluir from './pages/Rotina/Excluir';

import TelefonesVisualizar from './pages/Telefones/Visualizar';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path='/entrar' exact component={Entrar} />
            <Route path='/registro' exact component={Registro} />
            <Route path='/menu' exact component={Menu} />

            <Route path='/remedios/novo' exact component={RemediosNovo} />
            <Route path='/remedios/visualizar' exact component={RemediosVisualizar} />
            <Route path='/remedios/editar/:id' exact component={RemediosEditar} />
            <Route path='/remedios/excluir/:id' exact component={RemediosExcluir} />

            <Route path='/objetos/novo' exact component={ObjetosNovo} />
            <Route path='/objetos/visualizar' exact component={ObjetosVisualizar} />
            <Route path='/objetos/editar/:id' exact component={ObjetosEditar} />
            <Route path='/objetos/excluir/:id' exact component={ObjetosExcluir} />

            <Route path='/rotina/novo' exact component={RotinaNovo} />
            <Route path='/rotina/visualizar' exact component={RotinaVisualizar} />
            <Route path='/rotina/editar/:id' exact component={RotinaEditar} />
            <Route path='/rotina/excluir/:id' exact component={RotinaExcluir} />

            <Route path='/telefones/visualizar' exact component={TelefonesVisualizar} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
