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


let userSelection = undefined;
let machineSelection = undefined;
let round = 0;

function resetGame() {
  userSelection = undefined;
  machineSelection = undefined;
  round = 0;
  console.log(round)
}

function start() {
  // setState();en la imagen seleccionada
  round += round;
  blockInputUser();
  waitingMachine();
  machineDoSelection();
}

function waitingMachine() {
  // showMessage();
}

function machineDoSelection() {
  const $newOption = randomMachineOption();
  machineSelection.push($newOption);
  const playDelay = 5000;
}


function randomMachineOption() {
  const $cuadros = document.querySelectorAll('.cuadro');
  const index = Math.floor(Math.random() * $cuadros.length);
  return $cuadros[index];
}

function blockInputUser() {
  document.querySelectorAll('.cuadro').forEach(function ($cuadro) {
    $cuadro.onclick = function () {
    };
  });
}

function allowInputUser() {
  document.querySelectorAll('.cuadro').forEach(function ($cuadro) {
    $cuadro.onclick = userDoSelection();
  });
}


function userDoSelection(e) {
  const $cuadro = e.target;
  userSelection.push($cuadro);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          <h1 class="text-success">Piedra, Papel, Tijera, Lagarto o Spock </h1>
          <button type="button" class="btn btn-primary" onClick={() => resetGame()}>Empezar</button>
        </span>
      </header>
      <body className="App-body">
        <div class="container">
          <div class="row">
            <div class="col-auto">
              <div class="cuadro" id="cuadro1"></div>
              {/* <img src={foto1} alt=""></img> */}
            </div>
            <div class="col-auto">
              <div class="cuadro" id="cuadro2"></div>
              <p class="text-primary" Id="2">TIJERA</p>
              {/* <img src={foto2} alt="TIJERA"></img> */}
            </div>
            <div class="col-auto">
              <div class="cuadro" id="cuadro3"></div>
              {/* <img src={foto3} alt=""></img> */}
            </div>
          </div>
          <div class="row">
            <div class="col-auto">
              <div class="cuadro" id="cuadro4"></div>
              <p class="text-secondary" Id="4">SPOCK</p>
              {/* <img src={foto4} alt="SPOCK"></img> */}
            </div>
            <div class="col-auto">
              <div class="cuadro" id="cuadro5"></div>
              {/* <img src={foto5} alt="-"></img> */}
            </div>
            <div class="col-auto">
              <div class="cuadro" id="cuadro6"></div>
              <p class="text-success" Id="6">PAPEL</p>
              {/* <img src={foto6} alt="PAPEL"></img> */}
            </div>
          </div>
          <div class="row">
            <div class="col-auto">
              <div class="cuadro" id="cuadro7"></div>
              <p class="text-danger" Id="7">LAGARTO</p>
              {/* <img src={foto7} alt="LAGARTO"></img> */}
            </div>
            <div class="col-auto">
              <div class="cuadro" id="cuadro8"></div>
              {/* <img src={foto8} alt=""></img> */}
            </div>
            <div class="col-auto">
              <div class="cuadro" id="cuadro9"></div>
              <p class="text-warning" Id="9">PIEDRA</p>
              {/* <img src={foto9} alt="PIEDRA"></img> */}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}


export default App;
