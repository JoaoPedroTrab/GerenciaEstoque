import React from 'react';
import Login from './pages/login/indexLogin'
import MainPage from './pages/listaPecas/indexLista'
import Header from './pages/header/indexHeader'
import Menus from './pages/menus/indexMenus'
import Cadastro from './pages/cadastroPecas/indexCadastroP'

import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";


const App = () => {
  return ( 
    <div className="app">
        <Router> {/* Sistema de rotas da pagina */}
          <Routes>
            <Route exact path="/" element={<Login />} />   
            <Route exact path="/pecas" element={<MainPage />} />
            <Route exact path="/testeHeader" element={<Header/>}/>
            <Route exact path="/menu" element={<Menus/>}/>
            <Route exact path="/cadastro" element={<Cadastro/>}/>
          </Routes>
        </Router>
    </div>
  );
  }
  
  export default App;
