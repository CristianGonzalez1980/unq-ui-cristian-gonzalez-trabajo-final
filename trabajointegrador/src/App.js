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
      lastResult: "Elige una opción",
      round: 0,
      win: 0,
      lose: 0,
      showText: false,
      showOption: true,
      showButton: true,
      showCpuText: false,
      showAlert: false,
      showAlertDanger: false,
      showAlertSucces: false,
      showAlertWarning: false,
      itemSel: "",
      options: ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock'],
    };
  }

  newGame = () => {
    this.setState({ showCpuText: false, showOption: true, showButton: false, showAlertDanger: false, showAlertSucces: false, showAlertWarning: false })
  }

  resetGame = () => {
    this.setState({ userselection: undefined });
    this.setState({ machineselection: undefined });
    this.setState({ round: 0 });
    this.setState({ win: 0 });
    this.setState({ lose: 0 });
    this.setState({ lastResult: "Volvamos a empezar" })
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
    this.setState({ lastResult: "Perdiste, probá otra vez!", showAlertDanger: true });
  }

  humnaWin = (userSel, machSel) => {
    let win = this.state.win;
    win++
    this.setState({ win });
    this.setState({ lastResult: "Bravo, ganaste!", showAlertSucces: true });
  }

  tiedGame = (userSel, machSel) => {
    this.setState({ lastResult: "Ouch se produjo un empate!", showAlertWarning: true });
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
    this.setState({ userselection });
    this.setState({ showOption: false, showButton: false })
    this.startMachinePlay();
  }

  mostrarOpcion = (img, text) => {
    return (
      <>
        {
          this.state.showOption && (<img src={img} alt={text} className="cuadro" id={text} onMouseEnter={() => this.setState({ showText: true, itemSel: text })}
            onMouseLeave={() => this.setState({ showText: false })} onClick={(event) => this.userDoSelection(event)} />)
        }
      </>
    )
  }

  mostrarSelecion = (id, fShow, fState, text) => {
    return (
      <>
        <div className="row-sel" id={id}>
          <div>{text}</div>
        </div>
        <div className="row-sel" id={id}>
          {fShow && (<div className="selText"><span>{fState}</span></div>)}
        </div>
      </>
    )
  }

  mostrarAlerta = () => {
    return (
      <>
        <div className="row">
          <div>{this.state.showAlertDanger && (<h5 className="alert alert-danger"> {this.state.lastResult} </h5>)}
          </div>
          <div>{this.state.showAlertSucces && (<h5 className="alert alert-success"> {this.state.lastResult} </h5>)}
          </div>
          <div>{this.state.showAlertWarning && (<h5 className="alert alert-warning"> {this.state.lastResult} </h5>)}
          </div>
        </div>
      </>
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
              <div className="row">
                <div className="col-sel">
                  {this.mostrarSelecion("hum", this.state.showText, this.state.itemSel, "Tu elección: ")}
                </div>
                <div className="col-auto">
                  {this.mostrarOpcion(tijera, "Tijera")}
                </div>
                <div className="col-sel">
                  {this.mostrarSelecion("cpu", this.state.showCpuText, this.state.machineselection, "Elección robot: ")}
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  {this.mostrarOpcion(spock, "Spock")}
                </div>
                <div className="col-btn-auto">
                  <div>
                    {this.state.showButton && <button type="button" className="btn-danger" onClick={() => this.newGame()}>Jugar</button>}
                  </div>
                  <div>
                    {this.state.showAlert && <h3 className="alert alert-warning"> {this.state.lastResult} </h3>}
                  </div>
                </div>
                <div className="col-auto">
                  {this.mostrarOpcion(papel, "Papel")}
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  {this.mostrarOpcion(lagarto, "Lagarto")}
                </div>
                <div className="col-auto">
                  {this.mostrarOpcion(piedra, "Piedra")}
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
      </div>
    );
  }
}

export default App;
