import NewUpdate from '../NewUpdate';
import { useState } from 'react';
import '../css/Home.css'

const Home = () => {

    const [isAddUpdateClicked, setIsAddUpdateClicked] = useState(false)


    const handleAddUpdateClick = () => {
  
      setIsAddUpdateClicked(true)
  
    }

  return (  
    <div className='bcg'>

<h1 className='baltam-header'>בלת"ם</h1>
    <div>
      <button className='btn' onClick={() => handleAddUpdateClick()}>להוספת בלתמ + </button>
    </div>
    {
      isAddUpdateClicked ? <NewUpdate /> : null
    }
  </div>)

}

export default Home;