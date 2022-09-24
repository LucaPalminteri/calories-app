import Link from 'next/link'
import React from 'react'
import Header from './Header'

function Settings() {

    const createPosts = (cant) => {
        const arrPosts = [];
        for(let i=0;i<cant;i++) {
          arrPosts.push(
          <div key={i} className='setting-option' >Setting option {i+1}</div>)
        }
        return arrPosts
      }

  return (
    <div className='settings'>
        <Header />
        <nav>
            {createPosts(5)}
        </nav>
    </div>
  )
}

export default Settings