import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const DemoComponent = (props) => {
  return (
    <div>
        <div>Đây là tuổi : {props.age}</div>
        <div>Đây là tên : {props.displayName}</div>
    </div>
  );
};
function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('Cee');
  const onIncreaseAge = () => {
    setAge(age + 1);
  }
  return (
    <div className='container'>
      <div> {age} </div>
      <div onClick={onIncreaseAge}>Tăng age 1</div>
      <DemoComponent age = {age} displayName = {name}/>
    </div>
  );
};

export default App;
