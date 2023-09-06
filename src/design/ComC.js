import React, { useContext } from 'react'
import { AppState,NameState } from '../App'
const ComC = () => {
  const appData = useContext(AppState)
  const nameData = useContext(NameState)
  return (
    <div className='comc'>
    <div>ComC</div>
    <h1>{appData}</h1>
    <h1>name: {nameData.name}</h1>
    <h1>age: {nameData.age}</h1>
    <h1>email: {nameData.email}</h1>
 
    </div>
  )
}

export default ComC