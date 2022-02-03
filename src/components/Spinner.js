import React from 'react'
import loading from './loading.gif'

export default function spinner() {
  return (
    <div style={{textAlign: 'center'}}>
      <img src={loading} alt="" style={{width: '200px'}} />
    </div>
  )
}
