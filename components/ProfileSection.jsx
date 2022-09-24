import { useState } from "react"
import ProfileIdea from "./ProfileIdea"

function ProfileSection() {

    const [activeSection, setActiveSection] = useState('IDEAS')
    const bottomBorder = { borderBottom: '2px solid #000', marginBottom: '-2px', backgroundColor: '#EFEFEF'}
    const noBorder = { border: 'none' }

    const buttonHandler = (section) => {
        setActiveSection(section)
    }

    const createPosts = (cant) => {
        const arrPosts = [];
        for(let i=0;i<cant;i++) {
          arrPosts.push(
          <ProfileIdea key={i} />)
        }
        return arrPosts
      }

  return (
    <div className='profile-section'>
        <nav className='btn-container'>
            <button onClick={() => buttonHandler('IDEAS')} style={ activeSection == 'IDEAS' ? bottomBorder : noBorder}>IDEAS</button>
            <button onClick={() => buttonHandler('PROBLEMS')} style={ activeSection == 'PROBLEMS' ? bottomBorder : noBorder}>PROBLEMS</button>
        </nav>
        <main className="profile-ideas">
            {createPosts(10)}
        </main>
    </div>
  )
}

export default ProfileSection