import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Builds from './pages/builds';
import Build from './pages/build';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/builds' element={<Builds />} />
      <Route path='/builds/:id' element={<Build />} />
    </Routes>
  );
}

export default App;

