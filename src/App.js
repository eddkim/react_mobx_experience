
import { observer } from 'mobx-react';
import './App.css';
import { useCounterStore } from './context/counterContext';

function App() {

  const myCounter = useCounterStore()

  // console.log('counter',myCounter)
  return (
    <div style={{textAlign:'center', padding:16}}>
      카운트 : {myCounter.count}
      <br/>
      <br/>
      마이너스 ? : {myCounter.isNegative}
      <br/>
      <br/>
      <button onClick={()=> myCounter.increase()}>+</button>
      <button onClick={()=> myCounter.decrease()}>-</button>
    </div>
  );
}

export default observer(App) ; // 구독
