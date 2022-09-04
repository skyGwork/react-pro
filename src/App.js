/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import logo from './sel.PNG';

import React from 'react';

function App() {
  return (
    <div>
      <section className="greet-skyinnk" id="hey">
        <Perspn />
        <Message />
      </section>

      {/* image test : assets frm src */}
      <div className="test-img">
        <img src={logo} alt="logo" />
      </div>

      {/* google font icon */}
      <div className="icon">
        <ul>
          <li>
            <a href="https://www.skyinnk.com/" target="_blank">
              <span class="material-symbols-outlined  menu">menu</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="material-symbols-outlined search">search</span>
            </a>
          </li>
        </ul>
        <div className="search-display">
          <form action="/#">
            <input type="text" placeholder="Search.." name="search2" />
            <button type="submit">
              <span class="material-symbols-outlined search">search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
const Perspn = () => {
  return (
    <div className="greet-skyinnk-logo">
      <div className="img">
        {/* build assets from PUBLIC_URL */}
        <img src={process.env.PUBLIC_URL + 'images/logo192.png'} alt="" />
      </div>
      <h1 className="title">skyink</h1>
    </div>
  );
};

const Message = () => (
  <p className="greet-skyinnk-msg">Its like the web developer</p>
);

export default App;
