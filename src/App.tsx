import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
 import './index.css';
// layout
import Layout from './layout/Layout';
// pages
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectDetailPage from './components/projects/ProjectDetailsPage';
import Services from './pages/Services';
import { ParallaxProvider } from 'react-scroll-parallax';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import HealthTechServices from './pages/HealthTechServices';
import HServiceTemplate from './pages/HServicesTemplate';
import HTServices from './pages/HealthTechServices';
import TypeformFlow from './components/utility/PackageBuilder';
import SecurityCheck from './components/SecurityCheck';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const App: React.FC = () => {
  useScrollToTop();

  return (
    <ParallaxProvider>
      <SecurityCheck />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/healtech-services' element={<HTServices />} />
          <Route path='/healthtech-services-best-healthtech-company-in-delhi-ncr' element={<HealthTechServices />} />
          <Route path='/healthtech-services-best-healthtech-company-in-delhi-ncr/:slug' element={<HServiceTemplate />} />
          <Route path='/projects/:id' element={<ProjectDetailPage />} />
          <Route path='/package-builder' element={<TypeformFlow />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Layout>
    </ParallaxProvider>

  )
}

export default App;
