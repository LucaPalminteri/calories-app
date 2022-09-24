import React from 'react'

function IdeaPost() {
  return (
    <div className='idea-post'>
        <header className='idea-post__header'>
            <div className='profile-img'></div>
            <div className='username' style={{width: Math.floor(Math.random() * 75) + 140}}></div>
        </header>
        <main>
            <div className='idea-post__main'></div>
        </main>
        <footer className='idea-post__footer'>
            <div className='idea-item'></div>
            <div className='idea-item'></div>
            <div className='idea-item'></div>
        </footer>
    </div>
  )
}

export default IdeaPost