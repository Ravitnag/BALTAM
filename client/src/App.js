import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NewUpdate from './NewUpdate';


function App() {

  const [isAddUpdateClicked, setIsAddUpdateClicked] = useState(false)


  const handleAddUpdateClick = () => {

    setIsAddUpdateClicked(true)
   
   }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1> בלתם</h1>
        <div>
         בשביל שלא תתבאס כשתגיע
        </div>

        <button onClick={()=>handleAddUpdateClick()}>להוספת עדכון + </button>
      {
        isAddUpdateClicked ? <NewUpdate/> : null
      }
      </header>
    </div>
  );
}

export default App;
