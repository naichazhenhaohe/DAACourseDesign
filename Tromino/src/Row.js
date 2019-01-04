import React from 'react'

export default class Row extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    let {id, con} = this.props
    let cols = []
    let i = 0
    
    con = con.split(' ')

    return (
      <div>
        {
          con.length !== 0
          ? con.map((item,i)=><button key={i}>{item}</button>)
          : null
        }
      </div>
    )
  }
}
