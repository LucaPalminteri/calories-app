import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Profile from '../components/Profile'

function profile() {
  return (
    <div>
        <Header title={'PROFILE'}/>
        <Profile />
        <Footer activeNow={'PROFILE'}/>
    </div>
  )
}

export default profile