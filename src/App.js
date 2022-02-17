import './App.css';
import React from 'react';
import RadioButton from './components/radiobutton'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='head'>Уравнение Менделеева - Клапейрона</div>
        <div className='formula'>P * V = m/M * RT</div>
        <div className='head'> Выберите переменную, которую хотите найти:</div>
        <RadioButton />
      </div>
    );
  }
}

export default App;