import React from 'react';
import { Route, Routes } from "react-router-dom";

import './index.css';
// layout
import Layout from './layout/Layout';
// pages
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectDetailPage from './components/projects/ProjectDetailsPage';
import { ParallaxProvider } from 'react-scroll-parallax';


const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectDetailPage />} />
        </Routes>
      </Layout>
    </ParallaxProvider>

  )
}

export default App;
