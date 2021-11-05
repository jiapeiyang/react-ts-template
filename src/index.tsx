import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import aPng from './assets/images/02.jpeg';

try {
  const rootElement = document.getElementById('root');
  console.log('运行1');
  const App = () => (
    <div className="hello">
      Hello1
      <img src={aPng} alt="" />
    </div>
  );
  render(<App />, rootElement);
} catch (err) {
  console.log('err', err);
}
