import React from 'react';
import './App.css';

class Node extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const _ = {
      height : this.props.value * 5
    }
    return(
      
    <div className="elementNode" style={_}>{this.props.value}</div>
    );
  }
}

class Toolbar extends React.Component {
  render() {
    return(
      <div class="toolbar"><button onClick={() => this.props.onClick()}>Quick Sort</button></div>
    );
  }
}
class Visualizer extends React.Component {

  renderValues(values) {
    const result = values.map((i) => {
      i+= 1;
      return (<Node value={i}/>)
    }
      
    );
    return result
  }

  render() {
    return(
      <div>{this.renderValues(this.props.values)}</div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      values : [...Array(100).keys()].sort( () => .5 - Math.random() )
    }
  }
  quickSort() {
    this.setState({
      values: this.state.values.sort()
    });
  }
  render() {
    return (
      <div className="App">
          <Toolbar values={this.state.values} onClick={() => this.quickSort()}/>
          <Visualizer values={this.state.values}/>
      </div>
    );
  }
}

export default App;
