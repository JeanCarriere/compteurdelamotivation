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
    const score = Math.floor(100 * ((Number(capacite) * Number(valeur) + Number(controle))  + Number(bienveillant) + Number(encourageant) + Number(securisant) + Number(stimulant)) / 200)
    const date = new Date();
    return (
    <div className="wrapper">
      <h1>Compteur de la motivation</h1>
      <img src={engine} className="engine" alt="Compteur de la motivation" />
      <div className="app">
        <div className="app__left">
          <div className="app__box">
            <div className="input"><h2 style={{margin: 0}}>Compétence</h2><input type="number" value={capacite} onChange={(e) => this.setState({capacite: this.check(e.target.value, 10)})}/><span>&nbsp;/&nbsp;10</span></div>
          </div>
          <div className="app__box">
            <div className="input"><h2 style={{margin: 0}}>Valeur</h2><input style={{width:'60px'}} type="number" value={valeur} onChange={(e) => this.setState({valeur: this.check(e.target.value, 10)})}/><span> / 10</span></div>
          </div>
          <div className="app__box">
            <div className="input"><h2 style={{margin: 0}}>Contrôle</h2><input style={{width:'60px'}} type="number" value={controle} onChange={(e) => this.setState({controle: this.check(e.target.value, 40)})}/><span> / 40</span></div>
          </div>
          <div className="app__box">
            <h2>Environnement</h2>
            <div className="input"><span>Bienveillant</span><input type="number" value={bienveillant} onChange={(e) => this.setState({bienveillant: this.check(e.target.value, 15)})}/><span>&nbsp;/&nbsp;15</span></div>
            <div className="input"><span>Encourageant</span><input type="number" value={encourageant} onChange={(e) => this.setState({encourageant: this.check(e.target.value, 15)})}/><span>&nbsp;/&nbsp;15</span></div>
            <div className="input"><span>Soutenant</span><input type="number" value={securisant} onChange={(e) => this.setState({securisant: this.check(e.target.value, 15)})}/><span>&nbsp;/&nbsp;15</span></div>
            <div className="input"><span>Stimulant</span><input type="number" value={stimulant} onChange={(e) => this.setState({stimulant: this.check(e.target.value, 15)})}/><span>&nbsp;/&nbsp;15</span></div>
          </div>
        </div>
        <div className="app__right">
          <GaugeChart className="gauge" id="gauge-chart2" textColor={'#FFF'} nrOfLevels={10} percent={score / 100} colors={['#FF0000', '#00FF00']} />
          <div className="app__box">
            <h2>Ma motivation</h2>
            <h3>Compétence : {Number(capacite)} / 10</h3>
            <h3>Valeur : {Number(valeur)} / 10</h3>
            <h3>Contrôle: {Number(controle)} / 40</h3>
            <h3>Environnement : {Number(bienveillant) + Number(encourageant) + Number(securisant) + Number(stimulant)} /60</h3>
            <h3>Score : {score} %</h3>
          </div>
          <div className="app__box">
            <h2>Date</h2>
            <div className="input">{date.toLocaleDateString("fr")}</div>
          </div>
          <div className="app__box">
            <h2>Prénom</h2>
            <div className="input"><input type="text" /></div>
          </div>
        </div>

      </div>
    </div>
  );
}
}

export default App;
