import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Cookies from 'universal-cookie/es6';
import {Provider} from "react-redux";
import App from "./pages/App";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import {store} from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/style.scss";


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
      <Route path='/' element={<App/>}/>
      <Route path="/login" exact element={
              <AuthenticationRoute>
                  <Login />
              </AuthenticationRoute>
          }/>
         
          <Route path='/profile' element={
              <PrivateRoute>
                <Profile/>
              </PrivateRoute>
          } />
      </Routes>
  </BrowserRouter>
</Provider>,
  document.getElementById("root")
);