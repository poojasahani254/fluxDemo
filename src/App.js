import React from 'react';
import logo from './logo.svg';
import './App.css';
var AppActions = require('./actions/AppActions.js');
var AppStore = require('./stores/AppStore.js');


class App extends React.Component{
  constructor() {
    super();
    this.state= {
      list: []
    }
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    debugger
    AppStore.addChangeListener(this._onChange);
  }

  componentUnmount (){
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    debugger
    this.setState({list:AppStore.getList()});
  }

  handleAddItem = (item) =>{
    alert('ted')
    AppActions.addItem('test')
  }

  handleRemoveItem = (index) => {
    AppActions.removeItem(index)
  }
  render() {
   console.log('stat' ,this.state.list)
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p onClick={()=>this.handleAddItem('hhj')}>
              Edit <code>src/App.js</code> and save to reload.{this.state.list}
            </p>

            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

export default App;
