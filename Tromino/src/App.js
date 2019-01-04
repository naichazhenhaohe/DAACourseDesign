import React, { Component } from 'react';
import Row from './Row'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      size: 16,
      board: [],
    }
  }



  handleClick = () => {
    let mark = 1
    let i, j
    const SIZE = this.state.size
    console.log(SIZE)
    console.log(typeof(SIZE))

    const board = new Array(SIZE)
    
    for (i = 0; i < SIZE; i++) {
      board[i] = new Array(SIZE)
      for (j = 0; j < SIZE; j++) {
        board[i][j] = 0
      }
    }

    function tromino(keyRow, keyCol, length, oriRow, oriCol) {                                                          
      let i = length / 2 
      if (i === 1) {
        if(oriRow<=keyRow+i-1 && oriCol>keyCol+i-1)   
          board[keyRow+i-1][keyCol+i-1] = board[keyRow+i][keyCol+i-1] = board[keyRow+i][keyCol+i] = mark++;  
        else if (oriRow<=keyRow+i-1 && oriCol<=keyCol+i-1)   
          board[keyRow+i-1][keyCol+i] = board[keyRow+i][keyCol+i] = board[keyRow+i][keyCol+i-1] = mark++; 
        else if (oriRow>keyRow+i-1 && oriCol<=keyCol+i-1) 
          board[keyRow+i-1][keyCol+i-1] = board[keyRow+i-1][keyCol+i] = board[keyRow+i][keyCol+i] = mark++;   
        else
          board[keyRow+i-1][keyCol+i-1] = board[keyRow+i-1][keyCol+i] = board[keyRow+i][keyCol+i-1] = mark++; 
      } else {
        if (oriRow<=keyRow+i-1 && oriCol>keyCol+i-1) {   
          board[keyRow+i-1][keyCol+i-1] = board[keyRow+i][keyCol+i-1] = board[keyRow+i][keyCol+i] = mark++
          tromino(keyRow,keyCol+i,i,oriRow,oriCol)  
          tromino(keyRow,keyCol,i,keyRow+i-1,keyCol+i-1)
          tromino(keyRow+i,keyCol,i,keyRow+i,keyCol+i-1)
          tromino(keyRow+i,keyCol+i,i,keyRow+i,keyCol+i)
        } else if (oriRow<=keyRow+i-1 && oriCol<=keyCol+i-1) {
          board[keyRow+i-1][keyCol+i] = board[keyRow+i][keyCol+i] = board[keyRow+i][keyCol+i-1] = mark++
          tromino(keyRow,keyCol+i,i,keyRow+i-1,keyCol+i)
          tromino(keyRow,keyCol,i,oriRow,oriCol)
          tromino(keyRow+i,keyCol,i,keyRow+i,keyCol+i-1)
          tromino(keyRow+i,keyCol+i,i,keyRow+i,keyCol+i)
        } else if (oriRow>keyRow+i-1 && oriCol<=keyCol+i-1) {
          board[keyRow+i-1][keyCol+i-1]=board[keyRow+i-1][keyCol+i] = board[keyRow+i][keyCol+i] = mark++
          tromino(keyRow,keyCol+i,i,keyRow+i-1,keyCol+i)
          tromino(keyRow,keyCol,i,keyRow+i-1,keyCol+i-1)
          tromino(keyRow+i,keyCol,i,oriRow,oriCol)
          tromino(keyRow+i,keyCol+i,i,keyRow+i,keyCol+i)
        } else {
          board[keyRow+i-1][keyCol+i-1] = board[keyRow+i-1][keyCol+i] = board[keyRow+i][keyCol+i-1] = mark++
          tromino(keyRow,keyCol+i,i,keyRow+i-1,keyCol+i) 
          tromino(keyRow,keyCol,i,keyRow+i-1,keyCol+i-1)
          tromino(keyRow+i,keyCol,i,keyRow+i,keyCol+i-1)
          tromino(keyRow+i,keyCol+i,i,oriRow,oriCol)
        }
      }
    }

    tromino(0,0,SIZE,2,3)
    this.setState({
      board
    })

  }

  getSize = (e)=>{
    this.setState({
      size: parseInt(e.target.value)
    })
  }

  render() {

    let {size,board} = this.state
    let rows = []
    let i = 0

    while(++i <= size) {
      rows.push(i);
    }
  
    console.log(rows)
    return (
      <div className="App">
      <input className='ipt' type="text" onChange={this.getSize}/>
      <p onClick={this.handleClick}>show</p>
      {
        board.length !== 0
        ? rows.map((item,i)=><Row key={i} id={i} con = {board[i].join(' ')} />)
        : null
      }
      </div>
      );
  }
}

export default App;
