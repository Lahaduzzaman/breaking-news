import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';
import Fragment from './components/Fragment/Fragment';

function App() {
  return (
    <div>
      <h2 >React Bootstrap</h2>
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadline></TopHeadline>

    </div>

  );
}

export default App;
