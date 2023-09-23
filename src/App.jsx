import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;