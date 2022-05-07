
import './App.css';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Marketplace from './components/marketplace/Marketplace';
import ProductsList from './components/products-list/Products-List';
import ProductCategoriesList from './components/product-categories-list/ProductCategoriesList';
import ProductDetail from './components/product-detail/ProductDetail';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/product-categories" element={<ProductCategoriesList />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
