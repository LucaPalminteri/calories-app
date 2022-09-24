import React from 'react'
import Image from 'next/image'

function Profile() {
  return (
    <div className='profile'>
        <div className='banner'>
            <Image
                alt='banner'
                src={'/banner.jpg'}
                layout={'responsive'}
                width='100'
                height='30'
            />
        </div>
        <div className='profile-img'>

        </div>
    </div>
  )
}

export default Profile