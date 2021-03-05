import React, { Component } from 'react';
import Nav from './Components/Nav';
import InfoCards from './Components/InfoCards';
import DirectoryBook from './Components/DirectoryBook'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">HOME
        </header>
        <section>
          <DirectoryBook />
        </section>

      </div>
    );
  }
}

export default App;
