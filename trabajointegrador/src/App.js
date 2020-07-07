import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import foto1 from './images/1.png'
import foto2 from './images/2.png'
import foto3 from './images/3.png'
import foto4 from './images/4.png'
import foto5 from './images/5.png'
import foto6 from './images/6.png'
import foto7 from './images/7.png'
import foto8 from './images/8.png'
import foto9 from './images/9.png'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <body className="App-body">
        <div class="container">
          <div class="row">
            <div class="col1-sm">
              <img src={foto1} alt=""></img>
            </div>
            <div class="col1-sm">
              <img src={foto2} alt="TIJERA"></img>
            </div>
            <div class="col1-sm">
              <img src={foto3} alt=""></img>
            </div>
          </div>
          <div class="row">
            <div class="col2-sm">
              <img src={foto4} alt="SPOCK"></img>
            </div>
            <div class="col2-sm">
              <img src={foto5} alt="-"></img>
            </div>
            <div class="col2-sm">
              <img src={foto6} alt="PAPEL"></img>
            </div>
          </div>
          <div class="row">
            <div class="col3-sm">
              <img src={foto7} alt="LAGARTO"></img>
            </div>
            <div class="col3-sm">
              <img src={foto8} alt=""></img>
            </div>
            <div class="col3-sm">
              <img src={foto9} alt="PIEDRA"></img>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
