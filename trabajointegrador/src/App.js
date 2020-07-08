import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// // import foto1 from './images/1.png'
// // import foto2 from './images/2.png'
// // import foto3 from './images/3.png'
// // import foto4 from './images/4.png'
// // import foto5 from './images/5.png'
// // import foto6 from './images/6.png'
// // import foto7 from './images/7.png'
// // import foto8 from './images/8.png'
// // import foto9 from './images/9.png'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userselection: undefined,
      machineselection: undefined,
      lastResult: undefined,
      round: 0,
      options: ['Tijera', 'Papel', 'Piedra', 'Lagarto', 'Spock'],
    };
  }

  // this.setState({ text: ev.target.value }); forma de utilizar setState

  resetGame = () => {
    this.setState({ userselection: undefined });
    this.setState({ machineselection: undefined });
    this.setState({ round: 0 });
    this.setState({ lastResult: undefined})
    console.log(this.state.round);
  }

  startMachinePlay = () => {
    let roundPlus = this.state.round;
    this.setState({ round: roundPlus++ });
    this.waitingMachine();
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
    this.setState({ lastResult: userSel+" "+machSel+" "+"perdiste, proba otra vez!" });
  }

  humnaWin = (userSel, machSel) => {
    this.setState({ lastResult: userSel+" "+machSel+" "+"bravo, ganaste!" });
  }

  tiedGame = (userSel, machSel) => {
    this.setState({ lastResult: userSel+" "+machSel+" "+"empate, han elegido el mismo elemento!" });
  }

  waitingMachine = () => {
    this.setState({ lastResult: "momento, la maquina esta decidiendo!" });
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
          <div className="row">
            <div className="col-auto">
              <h1 className="text-success">Piedra, Papel, Tijera, Lagarto o Spock </h1>
            </div>
          </div>
        </header>
        <body className="App-body">
          <div className="container">
            <div className="row">
              <div className="col-auto">
                <div className="cuadroNone" id="cuadro1"></div>
                {/* <img src={foto1} alt=""></img> */}
              </div>
              <div className="col-auto">
                <div className="cuadro" id="Tijera" onClick={(event) => this.userDoSelection(event)}>TIJERA</div>
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
                <p className="text-secondary" id="4"></p>
                <div className="cuadro" id="Spock" onClick={(event) => this.userDoSelection(event)}>SPOCK</div>
                {/* <p className="text-secondary" id="4">SPOCK</p> */}
                {/* <img src={foto4} alt="SPOCK"></img> */}
              </div>
              <div className="col-auto">
                <div className="cuadroNone" id="cuadro5"></div>
                {/* <img src={foto5} alt="-"></img> */}
              </div>
              <div className="col-auto">
                <div className="cuadro" id="Papel" onClick={(event) => this.userDoSelection(event)}>PAPEL</div>
                {/* <p className="text-success" id="6"></p> */}
                {/* <img src={foto6} alt="PAPEL"></img> */}
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                <div className="cuadro" id="Lagarto" onClick={(event) => this.userDoSelection(event)}>LAGARTO</div>
                {/* <p className="text-danger" id="7"></p> */}
                {/* <img src={foto7} alt="LAGARTO"></img> */}
              </div>
              {/* <div className="col-auto">
                <div className="cuadroNone" id="cuadro8"></div>
                { <img src={foto8} alt=""></img> }
              </div> 
              */}
              <div className="col-auto">
                <div className="cuadro" id="Piedra" onClick={(event) => this.userDoSelection(event)}>PIEDRA</div>
                {/* <p className="text-warning" id="9"></p> */}
                {/* <img src={foto9} alt="PIEDRA"></img> */}
              </div>
            </div>
          </div>
        </body>
        <div className="App-bottom">
          <div className="row">
            <div className="col-auto">
              <h1 className="text-success"> {this.state.lastResult} </h1>
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
