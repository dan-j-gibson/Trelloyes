import React, { Component } from 'react';
import List from './List';
import './App.css';
import STORE from './store.js';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };
    render () { 
        return (
      <main className='App-main'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
          <div className='App-list'>
            <App 
            lists={STORE.lists}
            id={STORE.allCards}
          </div>
        </header>
      </main>
    );
  }

export default App;


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>