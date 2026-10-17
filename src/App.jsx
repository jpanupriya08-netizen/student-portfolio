import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import ContactPage from './pages/ContactPage.jsx';
export default function App() {
  return <BrowserRouter><ScrollToTop /><Box id="top" className="site-shell"><Navbar /><Box component="main" className="main-content"><Routes>
    <Route path="/" element={<Home />} /><Route path="/about" element={<AboutPage />} /><Route path="/skills" element={<SkillsPage />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="/project/:id" element={<ProjectDetail />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<Home />} />
  </Routes></Box><Footer /></Box></BrowserRouter>;
}
