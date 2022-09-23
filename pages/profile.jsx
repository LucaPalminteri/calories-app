import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Profile() {
  return (
    <div>
        <Header/>
        <h2>Profile</h2>
        <Footer activeNow={'PROFILE'}/>
    </div>
  )
}

export default Profile