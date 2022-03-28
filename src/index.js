import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Cookies from 'universal-cookie/es6';
import {Provider} from "react-redux";

import MainPage from "./pages/Main-page";
import LoginPage from "./pages/Login-page";
import ProfilePage from "./pages/Profile-page";
import {store} from "./store";
import "./styles/App.scss";


const cookies = new Cookies();

axios.interceptors.request.use((config) => {
  if (cookies.get('auth-token'))
      config.headers.common['auth-token'] = cookies.get('auth-token');
  return config
})

axios.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  if (error.response.status === 419) {
      await cookies.remove('auth-token');
      window.location.href = '/login';
  }
  return Promise.reject(error);
});

// В случае если токена нет
const PrivateRoute = ({ children }) => {
  const token = cookies.get('auth-token')
  if (token) return children
  else return <Navigate to="/login" />

}
// Если токен существует
const AuthenticationRoute = ({ children }) => {
  const token = cookies.get('auth-token')
  if (token) 
    return <Navigate to="/" />
  else  
    return children
}

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path="/login" exact element={
              <AuthenticationRoute>
                  <LoginPage />
              </AuthenticationRoute>
          }/>
         
          <Route path='/profile' element={
              <PrivateRoute>
                <ProfilePage/>
              </PrivateRoute>
          } />
      </Routes>
  </BrowserRouter>
</Provider>,
  document.getElementById("root")
);