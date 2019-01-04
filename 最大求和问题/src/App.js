import React, { Component } from 'react';
import Row from './Row'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      line: 0,
      DATA: [],
      TEMP: [],
      RES: [],
    }
  }

  letsHaveFun = ()=>{
    const SIZE = this.state.line
    const RES = [0]
    const DATA = []
    const TEMP = []

    let i, j, current, left, right, mark

    for (i = 0; i < SIZE; i++) {
      DATA[i] = new Array(i+1)
      TEMP[i] = new Array(i+1)
      for (j = 0; j < i+1; j++) {
        mark = Math.floor(Math.random()*99 + 1)
        DATA[i][j] = TEMP[i][j] = mark
      }
    }
    
    for (i = SIZE-2; i>=0; i--) {
      for (j = 0; j < TEMP[i].length; j++) {
        current = TEMP[i][j]
        left = TEMP[i+1][j]
        right = TEMP[i+1][j+1]
        TEMP[i][j] =  current + left > current + right ? current + left : current + right
      }
    }

    console.info(DATA)
    console.info(TEMP)
  
    mark = 0

    for (i = 0; i < SIZE-1; i++) {
      console.info(TEMP[i+1])
      console.info(DATA[i][mark])
      mark = TEMP[i+1].indexOf(TEMP[i][mark] - DATA[i][mark])  
      RES.push(mark)
    }
    console.info(RES)
    this.setState({
      DATA,
      TEMP,
      RES
    })
  }

  getLineNum = e =>{
    this.setState({
      line: parseInt(e.target.value)
    })
  }

  render() {
    let {line, DATA, TEMP, RES} = this.state
    let rows = []
    let i = 0

    while(++i <= line) {
      rows.push(i);
    }

    return (
      <div className="App">
        <input type="text" className='ipt' onChange={this.getLineNum} placeholder='请输入行数'/>
        <p style={{color: '#54c3ef'}} onClick={this.letsHaveFun}>show</p>
        <div style={{marginBottom:'1rem'}}>----原数据----</div>
        <div className="data">
        {
          line === 0 || DATA.length === 0
          ? null
          : rows.map((item,i)=><Row key={i} type={'data'} colored={RES[i]} con = {DATA[i].join(' ')} />)
        }
        </div>
        <div>----动态规划后数据----</div>
        <div className="temp">
        {
          line === 0 || DATA.length === 0
          ? null
          : rows.map((item,i)=><Row key={i} type={'temp'} colored={RES[i]} con = {TEMP[i].join(' ')} />)
        }
        </div>
      </div>
    );
  }
}

export default App;
