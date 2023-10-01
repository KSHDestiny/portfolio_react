import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import pages from './utils/page';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Learning from './components/pages/Learning';
import Achievement from './components/pages/Achievement';
import UnderConstruction from './components/pages/UnderConstruction';
import Project from './components/pages/Project';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={pages.get('portfolio').path} element={<Home />} />
        <Route path={pages.get('home').path} element={<Home />} />
        <Route path={pages.get('about').path} element={<About />} />
        <Route path={pages.get('learning').path} element={<Learning />} />
        <Route path={pages.get('achievement').path} element={<Achievement />} />
        <Route path={pages.get('concept').path} element={<UnderConstruction />} />
        <Route path={pages.get('project').path} element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;