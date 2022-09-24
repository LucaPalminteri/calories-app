import React from 'react'
import Image from 'next/image'
import user from "../data/user.json"

function Profile() {
  return (
    <div className='profile'>
        <div className='banner'>
            <Image
                alt='banner'
                src={'/banner.jpg'}
                layout={'responsive'}
                width={100}
                height={35}
            />
        </div>
        <div className='profile-img'>
          <Image
          style={{borderRadius: 100}}
                alt='banner'
                src={'/user-img.jpg'}
                layout={'responsive'}
                width={100}
                height={100}
            />
        </div>
        <div className='profile-info'>
          <h3>{user.name}</h3>
          <h4>@{user.username}</h4>
        </div>
    </div>
  )
}

export default Profile