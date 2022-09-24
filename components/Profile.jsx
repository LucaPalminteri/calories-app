import React from 'react'
import Image from 'next/image'
import user from "../data/user.json"
import ProfileSection from './ProfileSection'

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
                priority='75'
            />
        </div>
        <div className='profile-img'>
          <Image
          style={{borderRadius: 100}}
                alt='user-img'
                src={'/user-img.jpg'}
                layout={'responsive'}
                width={100}
                height={100}
            />
        </div>
        <div className='profile-data'>
          <div className='data'>
            <h4>Followers</h4>
            <h4>{user.followers}</h4> 
          </div>
          <div className='data'>
            <h4>Follows</h4>
            <h4>{user.follows}</h4>
          </div>
          <div className='data'>
            <h4>Ideas</h4>
            <h4>{user.ideas}</h4>
          </div>
        </div>
        <div className='profile-info'>
          <h3>{user.name}</h3>
          <h4>@{user.username}</h4>
          <p>{user.bio}</p>
        </div>
        <ProfileSection />
    </div>
  )
}

export default Profile