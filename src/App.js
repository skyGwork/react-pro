import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './views/BookList';
import Error404 from './views/Error404';
import HomeView from './views/HomeView';
import ContactUs from './views/ContactUs';
function App() {
  return (
    <BrowserRouter>
      <nav> navbar</nav>
      <Routes>
        <Route>
          <Route path="/" element={<HomeView />}>
            <Route path="book-list" element={<BookList />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Route>
      </Routes>
      <footer> footer</footer>
    </BrowserRouter>
  );
}

export default App;
