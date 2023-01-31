import { Brands, Cart, Contact, Home, Shop, FullProduct } from './pages';
import { Routes, Route, } from 'react-router-dom';
import { Footer, Header } from './Componets'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/womazing' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='product/:id' element={
          <FullProduct />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Brands' element={<Brands />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
