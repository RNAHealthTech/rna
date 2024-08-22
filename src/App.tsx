import React from 'react';
import { Route, Routes } from "react-router-dom";

import './index.css';
// layout
import Layout from './layout/Layout';
// pages
import Home from './pages/Home';


const App: React.FC = () => {
  return (
     <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
     </Layout>
  )
}

export default App;
