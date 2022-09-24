import { useState } from 'react'
import IdeaPost from './IdeaPost'

function Main() {

  const createPosts = (cant) => {
    const arrPosts = [];
    for(let i=0;i<cant;i++) {
      arrPosts.push(
      <IdeaPost key={i} />)
    }
    return arrPosts
  }

  return (
    <div className='home'>
        {createPosts(10)}
    </div>
  )
}

export default Main