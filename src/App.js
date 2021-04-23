import React from 'react';
import './App.css';

class Node extends React.Component {
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
      <div className="toolbar col-sm-3">
        <div id="generator" className="divisor" onClick={() => this.props.sorts.generateArray()}>
          <p>
            Generate A New Array
          </p>
        </div>
        <div className="separator"></div>
        <div id="sizer" className="divisor">
          <p>
            Modify Array Size
          </p>
          <br/>
          <input type="range" min="0" max="100" id="changeSize" style={{background: "white", cursor: "pointer"}}/>
        </div>
        <div className="separator"></div>
        <div id="sortbar" className="divisor">
        <p onClick={() => this.props.sorts.insertionSort()}>
          Insertion Sort
        </p>
        <p onClick={() => this.props.sorts.selectionSort()}>
          Selection Sort
        </p>
        <p onClick={() => this.props.sorts.mergeSort()}>
          Merge Sort
        </p>
        <p onClick={() => this.props.sorts.bubbleSort()}>
          Bubble Sort
        </p>
        <p onClick={() => this.props.sorts.quickSort()}>
          Quick Sort
        </p>
          
        </div>
        </div>
    );
  }
}
class Visualizer extends React.Component {

  renderValues(values) {
    const result = values.map((i) => {
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
    super(props);
    this.state = {
      arraySize: 10,
      values : this.generateArray(10)
    }
    this.generateArray(10);
  }

  generateArray(size) {
    this.setState({
      values: Array(1).fill(null)
    });
    let list = []
    let index = 0;
    while (index < size) {
      const _ = Math.floor(Math.random() * ((size + 100) - 10 ) + 10);
      if (!(_ in list)) {
        list.push(_);
        index+=1;
      }
    }
    this.setState({
      values: list
    });
    return list
  }

  async insertionSort() {
    const arr = [...this.state.values];
    const n = arr.length;
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
      await sleep(30);
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
        this.setState({
          values: arr
        });
        console.log(arr);
    }
    
  }

  async selectionSort() {
    let inputArr = [...this.state.values];
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
      await sleep(30);
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min !== i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
        this.setState({
          values: inputArr
        });
    }
  }

  merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return arr + left + right
}

  async mergeSort(arr) {
    let array = [...arr]
    const half = array.length / 2
  
  // Base case or terminating case
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return this.merge(this.mergeSort(left),this.mergeSort(array))
  }

  async bubbleSort() {
    let inputArr = [...this.state.values];
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
      await sleep(30);
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min !== i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
        this.setState({
          values: inputArr
        });
    }
  }

  async quickSort() {
    let inputArr = [...this.state.values];
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
      await sleep(30);
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min !== i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
        this.setState({
          values: inputArr
        });
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <Toolbar 
          
          values={this.state.values} 
          sorts={{
            generateArray : () => this.generateArray(this.state.arraySize),
            insertionSort: () => this.insertionSort(), 
            selectionSort: () => this.selectionSort(),
            mergeSort: () => this.mergeSort(this.state.values),
            bubbleSort: () => this.bubbleSort(),
            quickSort: () => this.quickSort()}}
          />
          <Visualizer 
          className=""
          values={this.state.values}
          />
        </div>
      </div>
    );
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default App;
