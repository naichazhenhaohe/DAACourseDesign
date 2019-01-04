import React from 'react'

export default (props) => {

  let {colored, con,type} = props

  con = con.split(' ')

  return (
    <div>
    {
      con.length !== 0
      ? con.map((item,i)=>{
        if (i === colored && type ==='data') {
          return <button style={{color: '#ff6600'}} key={i}>{item}</button>
        } else {
          return <button key={i}>{item}</button>
        }
      })
      : null
    }
    </div>
    )
  
}