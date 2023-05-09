import React, { Fragment } from 'react';
import './App.css';
import Header from './compounds/Header/Header';
import Meals from './compounds/meals/melas';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
      <Meals/>
      </main>
    </Fragment>
  );
}
export default App;
