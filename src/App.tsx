import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/about';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Resume />} path="/resume" />
          <Route element={<Portfolio />} path="/portfolio" />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
