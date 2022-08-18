import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './views/BookList';
import Page404 from './views/Page404';

function App() {
  return (
    <BrowserRouter>
      <nav> navbar</nav>
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <div>
                <h1>home page demo</h1>
              </div>
            }
          />
          <Route path="/book-list" element={<BookList />} />
          
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      <footer> footer</footer>
    </BrowserRouter>
  );
}

export default App;
