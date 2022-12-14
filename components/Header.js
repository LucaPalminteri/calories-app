import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


function Header({title}) {

  const [isButtonToggled,setIsButtonToggled] = useState(false)

  const style = {marginRight: '10px'}
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
          <SettingsIcon fontSize='medium' style={style}/> 
        </Link> 
        :
        title == 'HOME' ? 
        <ChatBubbleOutlineOutlinedIcon fontSize='medium' style={style}/>
        :
        title == 'ADD' ? 
        < SearchOutlinedIcon fontSize='large' style={style}/>
        :
        <h2>{title}</h2>
      }
    </div>
  )
}

export default Header