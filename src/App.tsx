import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Container from './components/Container';
import Header from './components/Header';
import About from './pages/about';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <Router>
        <div className="relative">
          <Header />
          <Container className="mt-16 sm:mt-32">
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<About />} path="/about" />
              <Route element={<Resume />} path="/resume" />
              <Route element={<Portfolio />} path="/portfolio" />
            </Routes>
          </Container>
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
