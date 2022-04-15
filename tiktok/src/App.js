import { useState } from 'react'
import { Effect } from './Effect';
import { EffectAvatar } from './EffectAvatar';
import { EffectChatApp } from './EffectChatApp';
import { EffectLayout } from './EffectLayout';
import { EffectTimer } from './EffectTimer';
import { Ref } from './Ref';

function App() {
  // const order = [100, 200, 300]

  // const [counter, setCounter] = useState(() => {
  //   const total = order.reduce((prev, curr) => prev + curr)
  //   console.log(total)
  //   return total
  // })

  // const handleIncrease = () => {
  //   setCounter(counter + 1)
  //   //setCounter(prev => prev + 1)
  //   // setCounter(prev => prev + 1)
  //   // setCounter(prev => prev + 1)
  // }

  // const [info, setInfo] = useState({ name: 'Long', age: 22, address: 'Da Nang' })

  // const handleUpdate = () => {

  //   setInfo({ ...info, bio: 'Game' })
  // }
  // return (
  //   <div className="App" style={{ padding: '20px' }}>
  //     <h1>{JSON.stringify(info)}</h1>
  //     <button onClick={handleUpdate}>Update</button>
  //   </div>
  // );

  const [show, setShow] = useState(false)

  return (
    <div style={{ padding: '10%' }}>
      <button onClick={() => { setShow(!show) }}>Toggle</button>
      {show && <Ref />}
    </div>
  )

}

export default App;
