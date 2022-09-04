
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <p>Here is footer</p>
      <Link to="/" className="hdrs">
        home
      </Link>
      <br />
      <Link to="/products" className="hdrs">
        product
      </Link>
      <a href="http://google.com" target={'_blank'} rel="noreferrer"> google</a>
    </div>
  );
}
