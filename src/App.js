import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import BuildsPage from './pages/builds-page';
import Build from './pages/build-page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/builds' element={<BuildsPage />} />
      <Route path='/builds/:id' element={<Build />} />
    </Routes>
  );
}

export default App;

