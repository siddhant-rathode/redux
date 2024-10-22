import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './store/reducers/counterSlice'

const App = () => {
  const dispatch = useDispatch()

  const { value } = useSelector((state) => state.counter)

  const IncrementHandler = () => {
    dispatch(increment(value + 1))
  }
  const DecrementHandler = () => {
    dispatch(increment(value - 1))
  }
  
  return (
    <div className='w-[80%] mt-10 m-auto bg-zinc-200 p-4 rounded-lg'>
      <h1 className='text-3xl bg-white rounded-md p-2 inline-block'>Count = {value}</h1><br />
      <button onClick={IncrementHandler} className="bg-green-500 mt-6 text-white px-4 py-2 rounded mr-2">increment by 1</button>
      <button onClick={DecrementHandler} className="bg-red-500 text-white px-4 py-2 rounded">decrement by 1</button>
    </div>
  )
}

export default App