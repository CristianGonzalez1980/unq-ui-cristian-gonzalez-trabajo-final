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
      options: ['Tijera', 'Papel', 'Piedra', 'Lagarto', 'Spock'],
    };
  }

  // this.setState({ text: ev.target.value }); forma de utilizar setState

  resetGame = () => {
    this.setState({ userselection: undefined });
    this.setState({ machineselection: undefined });
    this.setState({ round: 0 });
    this.setState({ win: 0 });
    this.setState({ lose: 0 });
    this.setState({ lastResult: "Volvamos a contar" })
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
    console.log(this.state.userselection);
    const userSel = this.state.userselection;
    console.log(this.state.machineselection);

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
    this.setState({ lastResult: userSel + " contra " + machSel + ".  " + "Perdiste, probá otra vez!" });
  }

  humnaWin = (userSel, machSel) => {
    let win = this.state.win;
    win++
    this.setState({ win });
    this.setState({ lastResult: userSel + " contra " + machSel + ".  " + "Bravo, ganaste!" });
  }

  tiedGame = (userSel, machSel) => {
    this.setState({ lastResult: userSel + " contra " + machSel + ".  " + "Ouch se produjo un empate!" });
  }

  waitingMachine = () => {
    this.setState({ lastResult: "Momento...  la maquina esta decidiendo!" });
    this.machineDoSelection();
    setTimeout(() => {
      this.checkResult();
    }, 4000);
  }

  machineDoSelection = () => {
    const newOption = this.randomMachineOption();
    this.setState({ machineselection: newOption });
    console.log(this.state.machineselection);
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
    console.log(this.state.userselection);
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
          <div className="row" id="header-text">
            <h2 className="text-success">Piedra, Papel, Tijera, Lagarto o Spock </h2>
          </div>
          <div className="row">
            <h5 className="alert alert-warning"> {this.state.lastResult} </h5>
          </div>
        </header>
        <body className="App-body">
          <div className="container">
            <div className="row">
              {/* <div className="col-auto">
              <h1 className="text-success"> {this.state.lastResult} </h1>
                {/* <img src={foto1} alt=""></img> }
              </div> */}
              <div className="col-auto">
                <img src={tijera} alt="TIJERA" className="cuadro" id="Tijera" onClick={(event) => this.userDoSelection(event)} />
                {/* <p className="text-primary" id="2">TIJERA</p> */}
                {/* <img src={foto2} alt="TIJERA"></img> */}
              </div>
              <div className="col-autoNone">
                <div className="cuadroNone" id="cuadro3"></div>
                {/* <img src={foto3} alt=""></img> */}
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                {/* <p className="text-secondary" id="4"></p> */}
                <img src={spock} alt="SPOCK" className="cuadro" id="Spock" onClick={(event) => this.userDoSelection(event)} />
                {/* <p className="text-secondary" id="4">SPOCK</p> */}
                {/* <img src={foto4} alt="SPOCK"></img> */}
              </div>
              <div className="col-auto">
                <div className="cuadroNone" id="cuadro5"></div>
                {/* <img src={foto5} alt="-"></img> */}
              </div>
              <div className="col-auto">
                <img src={papel} alt="PAPEL" className="cuadro" id="Papel" onClick={(event) => this.userDoSelection(event)} />
                {/* <p className="text-success" id="6"></p> */}
                {/* <img src={foto6} alt="PAPEL"></img> */}
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                <img src={lagarto} alt="LAGARTO" className="cuadro" id="Lagarto" onClick={(event) => this.userDoSelection(event)} />
                {/* <p className="text-danger" id="7"></p> */}
                {/* <img src={foto7} alt="LAGARTO"></img> */}
              </div>
              {/* <div className="col-auto">
                <div className="cuadroNone" id="cuadro8"></div>
                { <img src={foto8} alt=""></img> }
         <img src="./img/add.svg" alt="add new note" className="icon--add" onClick={this.openModal} />

              </div> 
              */}
              <div className="col-auto">
                <img src={piedra} alt="PIEDRA" className="cuadro" id="Piedra" onClick={(event) => this.userDoSelection(event)} />
                {/* <p className="text-warning" id="9"></p> */}
                {/* <img src={foto9} alt="PIEDRA"></img> */}
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
              {/*<div key={c} className={`color color--${c}`} onClick={() => this.setState({ color: c })}>  como se hace onClick*/}
              <button type="button" className="btn btn-primary" onClick={() => this.resetGame()}>Limpiar Partidas</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
