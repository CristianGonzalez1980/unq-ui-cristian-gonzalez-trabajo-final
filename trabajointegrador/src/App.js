import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import piedra from './images/piedra.png';
import papel from './images/papel.png';
import spock from './images/spock.png';
import tijera from './images/tijera.png';
import lagarto from './images/lagarto.png';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userselection: undefined,
      machineselection: undefined,
      welcomeMsg: "Bienvenido!",
      lastResult: "¿Piedra, Papel, Tijera, Lagarto o Spock?",
      round: 0,
      win: 0,
      lose: 0,
      tie: 0,
      showText: false,
      showOption: false,
      showButton: true,
      showCpuText: false,
      showAlert: false,
      showAlertInfo: true,
      showAlertDanger: false,
      showAlertSucces: false,
      showAlertWarning: false,
      options: ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock'],
    };
  }

  newGame = () => {
    this.setState({ userselection: undefined, machineselection: undefined, showCpuText: false, showOption: true, showButton: false, showAlertInfo: true, showAlertDanger: false, showAlertSucces: false, showAlertWarning: false, lastResult: "Elige una opción" })
  }

  resetGame = () => {
    this.newGame()
    this.setState({ round: 0, win: 0, lose: 0, tie: 0, lastResult: "Volvamos a empezar" });
  }

  startMachinePlay = () => {
    let round = this.state.round;
    round++
    this.setState({ round });
    this.waitingMachine();
  }

  showStadistics = () => {
    return ("Ronda " + this.state.round + "    Ganó: " + this.state.win + "    Perdió: " + this.state.lose + "    Empató: " + this.state.tie);
  }

  checkResult = () => {
    const machSel = this.state.machineselection;
    const userSel = this.state.userselection;

    if (machSel === userSel) { this.tiedGame() } else {

      if ((machSel === 'Tijera' && (userSel === 'Papel' || userSel === 'Lagarto')) ||
        (machSel === 'Papel' && (userSel === 'Piedra' || userSel === 'Spock')) ||
        (machSel === 'Piedra' && (userSel === 'Lagarto' || userSel === 'Tijera')) ||
        (machSel === 'Lagarto' && (userSel === 'Spock' || userSel === 'Papel')) ||
        (machSel === 'Spock' && (userSel === 'Tijera' || userSel === 'Piedra'))) { this.humanLost() } else { this.humnaWin() }
    }
  }

  humanLost = () => {
    let lose = this.state.lose;
    lose++
    this.setState({ lose, lastResult: "Perdiste, probá otra vez!", showAlertDanger: true });
  }

  humnaWin = () => {
    let win = this.state.win;
    win++
    this.setState({ win, lastResult: "Bravo, ganaste!", showAlertSucces: true });
  }

  tiedGame = () => {
    let tie = this.state.tie;
    tie++
    this.setState({ tie, lastResult: "Ouch se produjo un empate!", showAlertWarning: true });
  }

  waitingMachine = () => {
    this.setState({ lastResult: "...Piedra, Papel, Tijera, Lagarto, Spock", showAlert: true });

    this.machineDoSelection();
    setTimeout(() => {
      this.checkResult(); this.setState({ showAlert: false, showButton: true, showCpuText: true })
    }, 4000);
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
    this.setState({ userselection, showText: true, showOption: false, showButton: false, showAlertInfo: false })
    this.startMachinePlay();
  }

  mostrarOpcion = (img, text) => {
    return (
      <>
        {
          this.state.showOption && (<img src={img} alt={text} className="cuadro" id={text} onMouseEnter={() => this.setState({ showText: true, userselection: text })}
            onMouseLeave={() => this.setState({ showText: false })} onClick={(event) => this.userDoSelection(event)} />)
        }
      </>
    )
  }

  mostrarSelecion = (id, fShow, fState, text) => {
    return (
      <div className="bar-sel">
        <div className="row-sel" id={id}>
          <div>{text}</div>
        </div>
        <div className="row-sel" id={id}>
          {fShow && (<div className="selText"><span>{fState}</span></div>)}
        </div>
      </div>
    )
  }

  mostrarAlerta = () => {
    return (
        <div className="row">
          <div>{this.state.showAlertInfo && (<div className="welcome"><div>{this.state.welcomeMsg}</div><div>{this.state.lastResult}</div></div>)}
          </div>
          <div>{this.state.showAlertDanger && (<h5 className="alert alert-danger"> {this.state.lastResult} </h5>)}
          </div>
          <div>{this.state.showAlertSucces && (<h5 className="alert alert-success"> {this.state.lastResult} </h5>)}
          </div>
          <div>{this.state.showAlertWarning && (<h5 className="alert alert-warning"> {this.state.lastResult} </h5>)}
          </div>
        </div>
    )
  }

  render() {
    return (
      <div className="App-super">
        <div className="App-container">
          <header className="App-header">
            {this.mostrarAlerta()}
          </header>
          <body className="App-body">
            <div className="container">
              <div className="row justify-content-around">
                <div className="col-4.5">
                  {this.mostrarSelecion("hum", this.state.showText, this.state.userselection, "Tu elección: ")}
                </div>
                <div className="col-4.5">
                  {this.mostrarSelecion("cpu", this.state.showCpuText, this.state.machineselection, "Elección robot: ")}
                </div>
              </div>
              <div className="row justify-content-around">
                <div className="col-auto">
                  {this.mostrarOpcion(tijera, "Tijera")}
                </div>
              </div>
              <div className="row justify-content-around">
                <div className="col-3-9">
                  {this.mostrarOpcion(spock, "Spock")}
                </div>
                <div className="col-btn-auto">
                  <div>
                    {this.state.showButton && <button type="button" className="btn-danger" onClick={() => this.newGame()}>Jugar</button>}
                  </div>
                  <div>
                    {this.state.showAlert && <h5 id="msg" className="alert alert-warning"> {this.state.lastResult} </h5>}
                  </div>
                </div>
                <div className="col-3-9">
                  {this.mostrarOpcion(papel, "Papel")}
                </div>
              </div>
              <div className="row justify-content-around">
                <div className="col-4">
                  {this.mostrarOpcion(lagarto, "Lagarto")}
                </div>
                <div className="col-4">
                  {this.mostrarOpcion(piedra, "Piedra")}
                </div>
              </div>
            </div>
          </body>
          <div className="App-bottom" id="botom-text">
            <div className="row">
              <h1 className="text-success"> {this.showStadistics()} </h1>
            </div>
            <div className="row">
              {this.state.showButton && <button type="button" className="btn-reset" onClick={() => this.resetGame()}>Reiniciar Marcador</button>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
