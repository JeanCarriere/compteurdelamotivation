import React from 'react';
import GaugeChart from 'react-gauge-chart'
import './App.css';
import engine from './engine.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      capacite: '',
      controle: '',
      valeur: '',
      bienveillant: '',
      encourageant: '',
      securisant: '',
      stimulant: ''
    };
  }

  check = (val, max) => {
    if (/^\+?\d+$/.test(val)) {
      if (Number(val) > max) {
        return max + '';
      }
      return val;
    }
    return '';
  }

  render() {
    const {capacite,
    controle,
    valeur,
    bienveillant,
    encourageant,
    securisant,
    stimulant} = this.state;
    const score = Math.floor(100 * ((Number(capacite) + Number(controle)) * Number(valeur) + Number(bienveillant) + Number(encourageant) + Number(securisant) + Number(stimulant)) / 200)
  return (
    <div className="wrapper">
      <h1>Compteur de la motivation</h1>
      <img src={engine} className="engine" alt="Compteur de la motivation" />
      <div className="app">
        <div className="app__left">
          <div className="app__box">
            <h2>Compétence</h2>
            <div className="input"><span>Capacité</span><input type="number" value={capacite} onChange={(e) => this.setState({capacite: this.check(e.target.value, 5)})}/><span> / 5</span></div>
            <div className="input"><span>Contrôle</span><input type="number" value={controle} onChange={(e) => this.setState({controle: this.check(e.target.value, 5)})}/><span> / 5</span></div>
          </div>
          <div className="app__box">
            <h2>Valeur</h2>
            <div className="input"><span>Valeur</span><input type="number" value={valeur} onChange={(e) => this.setState({valeur: this.check(e.target.value, 10)})}/><span> / 10</span></div>
          </div>
          <div className="app__box">
            <h2>Environnement</h2>
            <div className="input"><span>Bienveillant</span><input type="number" value={bienveillant} onChange={(e) => this.setState({bienveillant: this.check(e.target.value, 25)})}/><span> / 25</span></div>
            <div className="input"><span>Encourageant</span><input type="number" value={encourageant} onChange={(e) => this.setState({encourageant: this.check(e.target.value, 25)})}/><span> / 25</span></div>
            <div className="input"><span>Sécurisant</span><input type="number" value={securisant} onChange={(e) => this.setState({securisant: this.check(e.target.value, 25)})}/><span> / 25</span></div>
            <div className="input"><span>Stimulant</span><input type="number" value={stimulant} onChange={(e) => this.setState({stimulant: this.check(e.target.value, 25)})}/><span> / 25</span></div>
          </div>
        </div>
        <div className="app__right">
          <GaugeChart className="gauge" id="gauge-chart2" textColor={'#FFF'} nrOfLevels={10} percent={score / 100} colors={['#FF0000', '#00FF00']} />
          <div className="app__box last">
            <h2>Ma motivation</h2>
            <h3>Compétence : {Number(capacite) + Number(controle)} / 10</h3>
            <h3>Valeur : {valeur} / 10</h3>
            <h3>Environnement : {Number(bienveillant) + Number(encourageant) + Number(securisant) + Number(stimulant)} / 100</h3>
            <h3>Score : {score} %</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
