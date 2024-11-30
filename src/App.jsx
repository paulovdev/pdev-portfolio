import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReactLenis } from "@studio-freight/react-lenis";

import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost/BlogPost';
import Works from './pages/Works/Works';
import TopNav from './components/TopNav/TopNav';
import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      <ReactLenis root >
        <TopNav />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ReactLenis>
    </Router>
  );
};

export default App;
