import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BookList from './views/BookList';
import Error404 from './views/Error404';
import HomeView from './views/HomeView';
import ContactUs from './views/ContactUs';
import SharedLayout from './views/SharedLayout';
import SingleProduct from './views/SingleProduct';
import Products from './views/Products';

function App() {
  return (
    <BrowserRouter>
      <nav> navbar to be added</nav>
      <Routes>
        <Route>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomeView />} />
            {/* " /book-list or book-list" All are nested inside home route "/" */}
            <Route path="book-list" element={<BookList />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="products" element={<Products />} />
            <Route path="*" element={<Error404 />} />

            {/* URL PARAMS */}
            <Route path="products/:productId" element={<SingleProduct />} />
          </Route>
        </Route>
      </Routes>
      <footer> footer to be added</footer>
    </BrowserRouter>
  );
}

export default App;
