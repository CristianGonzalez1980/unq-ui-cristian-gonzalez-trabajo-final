import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import piedra from './images/piedra.png'
import papel from './images/papel.png'
import spock from './images/spock.png'
import tijera from './images/tijera.png'
import lagarto from './images/lagarto.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userselection: undefined,
      machineselection: undefined,
      lastResult: "Elige una opción",
      round: 0,
      win: 0,
      lose: 0,
      options: ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock'],
    };
  }

  resetGame = () => {
    this.setState({ userselection: undefined });
    this.setState({ machineselection: undefined });
    this.setState({ round: 0 });
    this.setState({ win: 0 });
    this.setState({ lose: 0 });
    this.setState({ lastResult: "Volvamos a empezar" })
    console.log(this.state.round);
  }

  startMachinePlay = () => {
    let round = this.state.round;
    round++
    this.setState({ round });
    this.waitingMachine();
  }

  showStadistics = () => {
    return ("Ronda n° " + this.state.round + "    Ganaste: " + this.state.win + "    Perdiste: " + this.state.lose);
  }

  checkResult = () => {
    const machSel = this.state.machineselection;
    const userSel = this.state.userselection;

    if (machSel === userSel) { this.tiedGame(userSel, machSel) } else {

      if ((machSel === 'Tijera' && (userSel === 'Papel' || userSel === 'Lagarto')) ||
        (machSel === 'Papel' && (userSel === 'Piedra' || userSel === 'Spock')) ||
        (machSel === 'Piedra' && (userSel === 'Lagarto' || userSel === 'Tijera')) ||
        (machSel === 'Lagarto' && (userSel === 'Spock' || userSel === 'Papel')) ||
        (machSel === 'Spock' && (userSel === 'Tijera' || userSel === 'Piedra'))) { this.humanLost(userSel, machSel) } else { this.humnaWin(userSel, machSel) }
    }
  }

  humanLost = (userSel, machSel) => {
    let lose = this.state.lose;
    lose++
    this.setState({ lose });
    this.setState({ lastResult: userSel + " vs " + machSel + ".  " + "Perdiste, probá otra vez!" });
  }

  humnaWin = (userSel, machSel) => {
    let win = this.state.win;
    win++
    this.setState({ win });
    this.setState({ lastResult: userSel + " vs " + machSel + ".  " + "Bravo, ganaste!" });
  }

  tiedGame = (userSel, machSel) => {
    this.setState({ lastResult: userSel + " vs " + machSel + ".  " + "Ouch se produjo un empate!" });
  }

  waitingMachine = () => {
    this.setState({ lastResult: "...Piedra, Papel, Tijera, Lagarto, Spock" });
    this.machineDoSelection();
    setTimeout(() => {
      this.checkResult();
    }, 3000);
  }

  machineDoSelection = () => {
    const machineselection = this.randomMachineOption();
    this.setState({ machineselection });
  }

  randomMachineOption = () => {
    const options = this.state.options;
    const index = Math.floor(Math.random() * options.length);
    return options[index];
  }

  userDoSelection = event => {
    const userselection = event.target.id
    this.setState({ userselection });
    this.blockInputUser();
    this.startMachinePlay();
  }

  blockInputUser = () => {
    // document.querySelectorAll('.cuadro').forEach(function ($cuadro) {    desactivar botones
    //   $cuadro.onclick = function () {
    //   };
    // });
  }

  render() {
    return (
      <div className="App-container">
        <header className="App-header">
          {/* <div className="row"> */}
            <h5 className="alert alert-warning"> {this.state.lastResult} </h5>
          {/* </div> */}
        </header>
        <body className="App-body">
          <div className="container">
            <div className="row">
              <div className="col-auto">
                <img src={tijera} alt="TIJERA" className="cuadro" id="Tijera" onClick={(event) => this.userDoSelection(event)} />
              </div>
              <div className="col-autoNone">
                <div className="cuadroNone" id="cuadro3"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                <img src={spock} alt="SPOCK" className="cuadro" id="Spock" onClick={(event) => this.userDoSelection(event)} />
              </div>
              <div className="col-auto">
                <div className="cuadroNone" id="cuadro5"></div>
              </div>
              <div className="col-auto">
                <img src={papel} alt="PAPEL" className="cuadro" id="Papel" onClick={(event) => this.userDoSelection(event)} />
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                <img src={lagarto} alt="LAGARTO" className="cuadro" id="Lagarto" onClick={(event) => this.userDoSelection(event)} />
              </div>
              <div className="col-auto">
                <img src={piedra} alt="PIEDRA" className="cuadro" id="Piedra" onClick={(event) => this.userDoSelection(event)} />
              </div>
            </div>
          </div>
        </body>
        <div className="App-bottom" id="botom-text">
          <div className="row">
            <div className="col-auto">
              <h1 className="text-success"> {this.showStadistics()} </h1>
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-primary" onClick={() => this.resetGame()}>Reiniciar Marcador</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
