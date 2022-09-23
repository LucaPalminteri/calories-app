import React from 'react'
import Link from 'next/link'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Footer({activeNow}) {

  console.log(activeNow);
  return (
    <div className='footer'>
        <nav>
            <Link href={'/'}>
              {
                activeNow == 'HOME' ?
                <div style={{borderTop: '3px solid #000'}}><HomeRoundedIcon className='footer-icon active' fontSize='large'  /></div> :
                <HomeOutlinedIcon className='footer-icon' fontSize='large' /> 
              }
            </Link>
            <Link href={'/add'}>
              {
                activeNow == 'ADD' ?
                <div style={{borderTop: '3px solid #000'}}><AddCircleOutlinedIcon className='footer-icon active' fontSize='large' /></div> :
                <AddCircleOutlineOutlinedIcon className='footer-icon' fontSize='large' /> 
              }
            </Link>
            <Link href={'/profile'}>
            {
                activeNow == 'PROFILE' ?
                <div style={{borderTop: '3px solid #000'}}><AccountCircleRoundedIcon className='footer-icon active' fontSize='large' /></div> :
                <AccountCircleOutlinedIcon className='footer-icon' fontSize='large' /> 
              }
            </Link>
        </nav>
    </div>
  )
}

export default Footer