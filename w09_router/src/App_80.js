import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage_80 from './pages/HomePage_80';
import AboutPage_80 from './pages/AboutPage_80';
import ProductPage_80 from './pages/ProductsPage_80';
import ErrorPage_80 from './pages/ErrorPage_80';
import SharedLayout_80 from './pages/SharedLayout_80';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_80 />}>
          <Route index element={<HomePage_80 />} />
          <Route path='about' element={<AboutPage_80 />} />
          <Route path='products' element={<ProductPage_80 />} />
          <Route path='*' element={<ErrorPage_80 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
