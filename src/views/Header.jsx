/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/" className="hdrs">
        <p>Here is header</p>
      </Link>
      <a href="#"></a>
    </div>
  );
}
