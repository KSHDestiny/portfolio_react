import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import pages from './utils/page';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Learning from './components/pages/Learning';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={pages.get('home').path} element={<Home/>} />
        <Route path={pages.get('about').path} element={<About/>} />
        <Route path={pages.get('learning').path} element={<Learning/>} />
      </Routes>
    </Layout>
  );
}

export default App;
