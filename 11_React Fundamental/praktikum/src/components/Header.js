import React from 'react'

export default function Header({text}) {
  return (
    <div style={{borderBottom : 'solid rgba(0, 0, 0, 0.315) 3px', textAlign : 'left'}}>
        <h1 style={{padding : '0 0.5em'}}>{text}</h1>
    </div>
  )
}
