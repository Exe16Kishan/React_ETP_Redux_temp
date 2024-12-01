import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './reducers/counter'

function App() {
 const {value} = useSelector(state => state.counter) 
 const dispatch = useDispatch()
console.log(value)
  return (
    <div>

    {value}
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default App