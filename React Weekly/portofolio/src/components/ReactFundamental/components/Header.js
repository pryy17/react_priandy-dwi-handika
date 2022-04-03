import React from 'react'

export default function Header(props) {
  return (
    <div style={{borderBottom : 'solid rgba(0, 0, 0, 0.315) 3px', textAlign : 'left'}}>
        <h1 style={{padding : '0 0.5em'}}>{props.text}</h1>
    </div>
  )
}
