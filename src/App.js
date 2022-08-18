import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './views/BookList';
import Error404 from './views/Error404';
import HomeView from './views/HomeView';

function App() {
  return (
    <BrowserRouter>
      <nav> navbar</nav>
      <Routes>
        <Route>
          <Route path="/" element={<HomeView />} />
          <Route path="/book-list" element={<BookList />} />
          <Route path="*" element={<Error404 />} />
          <Route
            path="/contact"
            element={
              <div>
                <h1>@conact info</h1>
                <p>www.skyinnk.com</p>
              </div>
            }
          />
        </Route>
      </Routes>
      <footer> footer</footer>
    </BrowserRouter>
  );
}

export default App;
