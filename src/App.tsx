import './App.css';
import SearchBar from './components/SearchBar'
import SideBar from './components/SideBar'
import SearchContent from './components/SearchContent'
import React, { Component } from 'react';

class Foo extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    console.log('Cliqué');
  }
  render() {
    return <button onClick={this.goBack}>Go back</button>;
  }
}
function App() {
  return (
    <div className="App">
      <SearchBar />
      <SideBar />
      <SearchContent />

      <button onClick={this.goBack}>Go back</button>
      <button onClick={this.go}>Go forward</button>
    </div>
  );
}

export default App;
