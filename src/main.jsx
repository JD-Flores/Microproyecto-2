import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes,Route,BrowserRouter} from "react-router-dom"
import {HOME_URL, LOGIN_URL, REGISTER_URL, PROFILE_CLIENT, MOVIES_URL } from './constantes/urls'
import { Layout } from './Componentes/Layout/Layout'
import {HomePage} from './Paginas/Home/HomePage'
import {RegisterPage} from './Paginas/register/RegisterPage'
import { LoginPage } from './Paginas/login/LoginPage'
import ErrorPage from './Paginas/error/ErrorPage'
import { PerfilClientePage } from './Paginas/Perfil/PerfilClientePage'
import { PrivateRoute } from './Componentes/PrivateRoutes/PrivateRoute'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path={HOME_URL} element={<LoginPage/>}/>
        <Route path={REGISTER_URL} element={<RegisterPage/>}/>
        <Route path={LOGIN_URL} element={<LoginPage/>}/>
        <Route path={MOVIES_URL} element={<HomePage/>}/>
        <Route path={PROFILE_CLIENT} element={<PrivateRoute><PerfilClientePage/></PrivateRoute>}/>
        <Route path="/*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
