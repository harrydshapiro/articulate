import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import { Home } from './Home';
import { Artcile } from './Article';

function App() {
  return (
    <BrowserRouter>
      <Link to="/" id="navbar"><h1>articulate</h1></Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles/:articleId" element={<Artcile/>}/>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
