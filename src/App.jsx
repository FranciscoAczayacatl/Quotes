import './App.css'
import Card from './components/Card'
import Button from './components/Button';
import quotes from './quotes.json'
import { useState } from 'react';


function App() {
  const colors=['#00c9a7','#d65db1','#ff6f91','#ff9671','#ffc75f','#f9f871'];
  const colorIndex=Math.floor(Math.random() * colors.length);
  const [index, setIndex]= useState(Math.floor(Math.random() * quotes.length));
  let colorButton=colors[colorIndex];
  const changeQuotes=()=>{
    setIndex(Math.floor(Math.random() * quotes.length));
    
  }
  
  document.body.style=`background-color:${colorButton}; color:${colorButton}`;
  
  
  
  return (
    <div className="App">
      <div className='card'>
      <Card  quote={quotes[index].quote} author={quotes[index].author}/>
      <Button button={changeQuotes} style={{colorButton}}/>
      </div>
     
    </div>
  )
}

export default App
