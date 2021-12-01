
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import background from './images/680.jpg';
import React,{useState} from 'react';

function App() {
  return (
    <div
     className="App"
     style={{backgroundImage: `url(${background})`}}
     >
      <Header title='To Do List'/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
