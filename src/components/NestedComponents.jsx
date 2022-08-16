/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import './sel.PNG';

import React from 'react';

function App() {
  return (
    <div className="greet" id="hey">
      <Perspn />
      <Message />
    </div>
  );
}

const Perspn = () => {
  return <h1>webphin</h1>;
};
const Message = () => <p>Its like the web developer</p>;

export default App;
