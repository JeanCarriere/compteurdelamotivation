import React from 'react';
import GaugeChart from 'react-gauge-chart'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      capacite:'',
      controle:'',
      valeur:'',
      securisant: '',
      encourageant: '',
      bienveillant: '',
      stimulant: ''
    };
  }

  check = (val, max) => {
    if(/^\+?\d+$/.test(val)) {
      if(Number(val) > max) {
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
    securisant,
    encourageant,
    bienveillant,
    stimulant} = this.state;
    const result = Math.floor(100*((Number(capacite) + Number(controle)) * Number(valeur) + Number(securisant) + Number(encourageant) + Number(bienveillant) + Number(stimulant)) / 200)
  return (
    <div className="App">
      <h1>Compétence /10</h1>
      <div>Capacité: <input type="text" value={capacite} onChange={(e) => this.setState({capacite: this.check(e.target.value, 5)})}/>/5</div>
      <div>Contrôle: <input type="text" value={controle} onChange={(e) => this.setState({controle: this.check(e.target.value, 5)})}/>/5</div>

      <h1>Valeur /10</h1>
      <input type="text" value={valeur} onChange={(e) => this.setState({valeur: this.check(e.target.value, 10)})}/>/10

      <h1>Environnement /100</h1>
      <div>Sécurisant: <input type="text" value={securisant} onChange={(e) => this.setState({securisant: this.check(e.target.value, 25)})}/>/25</div>
      <div>Encourageant: <input type="text" value={encourageant} onChange={(e) => this.setState({encourageant: this.check(e.target.value, 25)})}/>/25</div>
      <div>Bienveillant: <input type="text" value={bienveillant} onChange={(e) => this.setState({bienveillant: this.check(e.target.value, 25)})}/>/25</div>
      <div>Stimulant: <input type="text"  value={stimulant} onChange={(e) => this.setState({stimulant: this.check(e.target.value, 25)})}/>/25</div>

      <h1>Ma motivation</h1>
      <h2>Compétence: {Number(capacite) + Number(controle)}</h2>
      <h2>Valeur: {valeur}</h2>
      <h2>Environnement: {Number(securisant) + Number(encourageant) + Number(bienveillant) + Number(stimulant)}</h2>
      <h2>Résultat: {result}%</h2>
      <div style={{maxWidth: '30rem'}}><GaugeChart id="gauge-chart2"  nrOfLevels={10} percent={result/100} /></div>
      
    </div>
  );
}
}

export default App;
