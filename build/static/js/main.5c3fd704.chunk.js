(this.webpackJsonptrabajointegrador=this.webpackJsonptrabajointegrador||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/piedra.089d4610.png"},function(e,t,a){e.exports=a.p+"static/media/papel.229a61b8.png"},function(e,t,a){e.exports=a.p+"static/media/spock.f4ef3432.png"},function(e,t,a){e.exports=a.p+"static/media/tijera.392c7b28.png"},function(e,t,a){e.exports=a.p+"static/media/lagarto.50a771e2.png"},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(2),r=a.n(o),i=(a(17),a(3)),c=a(4),l=a(11),m=a(10),u=(a(18),a(19),a(5)),h=a.n(u),d=a(6),p=a.n(d),w=a(7),v=a.n(w),E=a(8),f=a.n(E),g=a(9),N=a.n(g),S=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).newGame=function(){n.setState({userselection:void 0,machineselection:void 0,showCpuText:!1,showOption:!0,showButton:!1,showAlertInfo:!0,showAlertDanger:!1,showAlertSucces:!1,showAlertWarning:!1,lastResult:"Elige una opci\xf3n"})},n.resetGame=function(){n.newGame(),n.setState({round:0,win:0,lose:0,tie:0,lastResult:"Volvamos a empezar"})},n.startMachinePlay=function(){var e=n.state.round;e++,n.setState({round:e}),n.waitingMachine()},n.showStadistics=function(){return"Ronda "+n.state.round+"    Gan\xf3: "+n.state.win+"    Perdi\xf3: "+n.state.lose+"    Empat\xf3: "+n.state.tie},n.checkResult=function(){var e=n.state.machineselection,t=n.state.userselection;e===t?n.tiedGame():"Tijera"===e&&("Papel"===t||"Lagarto"===t)||"Papel"===e&&("Piedra"===t||"Spock"===t)||"Piedra"===e&&("Lagarto"===t||"Tijera"===t)||"Lagarto"===e&&("Spock"===t||"Papel"===t)||"Spock"===e&&("Tijera"===t||"Piedra"===t)?n.humanLost():n.humnaWin()},n.humanLost=function(){var e=n.state.lose;e++,n.setState({lose:e,lastResult:"Perdiste, prob\xe1 otra vez!",showAlertDanger:!0})},n.humnaWin=function(){var e=n.state.win;e++,n.setState({win:e,lastResult:"Bravo, ganaste!",showAlertSucces:!0})},n.tiedGame=function(){var e=n.state.tie;e++,n.setState({tie:e,lastResult:"Ouch se produjo un empate!",showAlertWarning:!0})},n.waitingMachine=function(){n.setState({lastResult:"...Piedra, Papel, Tijera, Lagarto, Spock",showAlert:!0}),n.machineDoSelection(),setTimeout((function(){n.checkResult(),n.setState({showAlert:!1,showButton:!0,showCpuText:!0})}),4e3)},n.machineDoSelection=function(){var e=n.randomMachineOption();n.setState({machineselection:e})},n.randomMachineOption=function(){var e=n.state.options;return e[Math.floor(Math.random()*e.length)]},n.userDoSelection=function(e){var t=e.target.id;n.setState({userselection:t,showText:!0,showOption:!1,showButton:!1,showAlertInfo:!1}),n.startMachinePlay()},n.mostrarOpcion=function(e,t){return s.a.createElement(s.a.Fragment,null,n.state.showOption&&s.a.createElement("img",{src:e,alt:t,className:"cuadro",id:t,onMouseEnter:function(){return n.setState({showText:!0,userselection:t})},onMouseLeave:function(){return n.setState({showText:!1})},onClick:function(e){return n.userDoSelection(e)}}))},n.mostrarSelecion=function(e,t,a,n){return s.a.createElement("div",{className:"bar-sel"},s.a.createElement("div",{className:"row-sel",id:e},s.a.createElement("div",null,n)),s.a.createElement("div",{className:"row-sel",id:e},t&&s.a.createElement("div",{className:"selText"},s.a.createElement("span",null,a))))},n.mostrarAlerta=function(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",null,n.state.showAlertInfo&&s.a.createElement("div",{className:"welcome"},s.a.createElement("div",null,n.state.welcomeMsg),s.a.createElement("div",null,n.state.lastResult))),s.a.createElement("div",null,n.state.showAlertDanger&&s.a.createElement("h5",{className:"alert alert-danger"}," ",n.state.lastResult," ")),s.a.createElement("div",null,n.state.showAlertSucces&&s.a.createElement("h5",{className:"alert alert-success"}," ",n.state.lastResult," ")),s.a.createElement("div",null,n.state.showAlertWarning&&s.a.createElement("h5",{className:"alert alert-warning"}," ",n.state.lastResult," ")))},n.state={userselection:void 0,machineselection:void 0,welcomeMsg:"Bienvenido!",lastResult:"\xbfPiedra, Papel, Tijera, Lagarto o Spock?",round:0,win:0,lose:0,tie:0,showText:!1,showOption:!1,showButton:!0,showCpuText:!1,showAlert:!1,showAlertInfo:!0,showAlertDanger:!1,showAlertSucces:!1,showAlertWarning:!1,options:["Piedra","Papel","Tijera","Lagarto","Spock"]},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App-super"},s.a.createElement("div",{className:"App-container"},s.a.createElement("header",{className:"App-header"},this.mostrarAlerta()),s.a.createElement("body",{className:"App-body"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row justify-content-around"},s.a.createElement("div",{className:"col-4.5"},this.mostrarSelecion("hum",this.state.showText,this.state.userselection,"Tu elecci\xf3n: ")),s.a.createElement("div",{className:"col-4.5"},this.mostrarSelecion("cpu",this.state.showCpuText,this.state.machineselection,"Elecci\xf3n robot: "))),s.a.createElement("div",{className:"row justify-content-around"},s.a.createElement("div",{className:"col-auto"},this.mostrarOpcion(f.a,"Tijera"))),s.a.createElement("div",{className:"row justify-content-around"},s.a.createElement("div",{className:"col-3-9"},this.mostrarOpcion(v.a,"Spock")),s.a.createElement("div",{className:"col-btn-auto"},s.a.createElement("div",null,this.state.showButton&&s.a.createElement("button",{type:"button",className:"btn-danger",onClick:function(){return e.newGame()}},"Jugar")),s.a.createElement("div",null,this.state.showAlert&&s.a.createElement("h6",{id:"msg",className:"alert alert-warning"}," ",this.state.lastResult," "))),s.a.createElement("div",{className:"col-3-9"},this.mostrarOpcion(p.a,"Papel"))),s.a.createElement("div",{className:"row justify-content-around"},s.a.createElement("div",{className:"col-4"},this.mostrarOpcion(N.a,"Lagarto")),s.a.createElement("div",{className:"col-4"},this.mostrarOpcion(h.a,"Piedra"))))),s.a.createElement("div",{className:"App-bottom",id:"botom-text"},s.a.createElement("div",{className:"row"},s.a.createElement("h1",{className:"text-success"}," ",this.showStadistics()," ")),s.a.createElement("div",{className:"row"},this.state.showButton&&s.a.createElement("button",{type:"button",className:"btn-reset",onClick:function(){return e.resetGame()}},"Reiniciar Marcador")))))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.5c3fd704.chunk.js.map