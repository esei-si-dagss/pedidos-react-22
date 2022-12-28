import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Home from './components/home';
import ClienteListado from "./components/clientes/clienteListado";
import ClienteDetalle from "./components/clientes/clienteDetalle";

import FamiliaListado from "./components/familias/familiaListado";
import FamiliaDetalle from "./components/familias/familiaDetalle";

import ArticuloListado from "./components/articulos/articuloListado";
import ArticuloDetalle from "./components/articulos/articuloDetalle";

import AlmacenListado from "./components/almacenes/almacenListado";
import AlmacenDetalle from "./components/almacenes/almacenDetalle";
import AlmacenInfo from "./components/almacenes/almacenInfo";


import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
//import './App.css';

function App() {
  return (
    <div>

      <BrowserRouter forceRefresh>

        <nav className="flex">
          <NavLink to="/" className="px-5 py-3 no-underline text-900 text-xl border-bottom-2 border-300 hover:border-500">Home</NavLink>
          <NavLink to="/clientes" className="px-5 py-3 no-underline text-700 text-xl border-bottom-2 border-300 hover:border-500">Clientes</NavLink>
          <NavLink to="/articulos" className="px-5 py-3 no-underline text-700 text-xl border-bottom-2 border-300 hover:border-500">Articulos</NavLink>
          <NavLink to="/familias" className="px-5 py-3 no-underline text-700 text-xl border-bottom-2 border-300 hover:border-500">Familias</NavLink>
          <NavLink to="/almacenes" className="px-5 py-3 no-underline text-700 text-xl border-bottom-2 border-300 hover:border-500">Almacenes</NavLink>
          <NavLink to="/pedidos" className="px-5 py-3 no-underline text-700 text-xl border-bottom-2 border-300 hover:border-500">Pedidos</NavLink>
        </nav>

        <div className="p-5">
          <Routes>
            <Route path="/" element={<Home mensaje="Página principal" />} />
            <Route path="clientes" >
              <Route index element={<ClienteListado />} />
              <Route path="nuevo" element={<ClienteDetalle />} />
              <Route path=":dniCliente" element={<ClienteDetalle />} />
            </Route>

            <Route path="articulos" >
              <Route index element={<ArticuloListado />} />
              <Route path="nuevo" element={<ArticuloDetalle />} />
              <Route path=":idArticulo" element={<ArticuloDetalle />} />
            </Route>

            <Route path="familias" >
              <Route index element={<FamiliaListado />} />
              <Route path="nuevo" element={<FamiliaDetalle />} />
              <Route path=":idFamilia" element={<FamiliaDetalle />} />
            </Route>

            <Route path="almacenes" >
              <Route index element={<AlmacenListado />} />
              <Route path="nuevo" element={<AlmacenInfo />} />
              <Route path=":idAlmacen" element={<AlmacenDetalle />} />
            </Route>

            <Route path="pedidos" >
              <Route index element={<Home mensaje="Vista de Pedidos <pendiente>" />} />
              <Route path=":id" element={<Home mensaje="Detalle de un pedido <pendiente>" />} />
            </Route>

          </Routes>
        </div>

      </BrowserRouter >
    </div >
  );
}

export default App;
