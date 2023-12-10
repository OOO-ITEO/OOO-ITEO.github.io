import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { NavBar } from './navbar/NavBar';


export const App = () => {
  return <div>
        <NavBar />
        <div className="container-fluid">
          <Outlet />
        </div>
  </div>
}
