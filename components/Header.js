import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';

function Header({title}) {

  const [isButtonToggled,setIsButtonToggled] = useState(false)

  const goBack = () =>{
    setIsButtonToggled(prev => !prev)
    window.history.back();
  }
  return (
    <div className='header'>
      <button onClick={goBack} className={isButtonToggled ? 'animation-btn' : 'normal-btn'}>
        <ArrowBackIosNewIcon />
      </button>
      {
        title == 'PROFILE' ? 
        <Link href='/settings'>
          <SettingsIcon fontSize='large' /> 
        </Link> :
        <h1>{title}</h1>
      }
    </div>
  )
}

export default Header