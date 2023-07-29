import React ,{useState} from 'react'
import './CalciStyles.css';
import { clear } from '@testing-library/user-event/dist/clear';
function Calci() {
  const [result,setResult] = useState("");
  const handleButton=(e)=>{
     setResult(result.concat(e.target.name));
  }
  const backspace=()=>{
      setResult(result.slice(0,-1));
  }
  const clear=()=>{
    setResult(" ");
  }
  const evaluate=()=>{
     try{
      setResult(eval(result).toString());
     }
     catch(err){
      setResult('error');
     }
  }
return (
  <div className='Main'>
      <div className='Container'>
              <input type= "text" value={result}/>
      </div>
      <div className='keypad'>
          <button onClick={clear}id="clear">clear</button>
          <button onClick={backspace}id="c">c</button>
          <button onClick={handleButton} name='/'>/</button>
          <button onClick={handleButton} name='7'>7</button>
          <button onClick={handleButton} name='8'>8</button>
          <button onClick={handleButton} name='9'>9</button>
          <button onClick={handleButton} name='*'>x</button>
          <button onClick={handleButton} name='4'>4</button>
          <button onClick={handleButton} name='5'>5</button>
          <button onClick={handleButton} name='6'>6</button>
          <button onClick={handleButton} name='-'>-</button>
          <button onClick={handleButton} name='1'>1</button>
          <button onClick={handleButton} name='2'>2</button>
          <button onClick={handleButton} name='3'>3</button>
          <button onClick={handleButton} name='+'>+</button>
          <button onClick={handleButton} name='0'>0</button>
          <button onClick={handleButton} name='.'>.</button>
          <button onClick={evaluate} id="result">=</button>
      </div>
  </div>
)
}


export default Calci