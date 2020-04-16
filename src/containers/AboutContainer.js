import React from 'react'
import SeoComponent from '../components/SeoComponent'

export default function MenuContainer () {
    return (
      <div style={{ marginLeft: '20%', marginRight: '20%', marginTop: '10vh' }}>
      <SeoComponent
        title={'About' }
      />
        <h1 style={{color:'white'}}>About</h1>
        <div>
    
        <p>Cinedantan is a friendly and searchable library of public domain movies.</p>
          <p>
          Please consider supporting <a href="https://archive.org" target="_Blank" rel="no-follow nofollow noopener noreferrer">Archive.org</a> as they host all the videos.
          </p>
        </div>
        
        <div style={{paddingTop:'100px'}}/>
        <h3 style={{color:'white'}}>Privacy</h3>
        <div>
          <p>
          CineDantan.com respect their user’s privacy. It collects the bare minimum stats and uses a <a href="https://github.com/electerious/Ackee" target="_Blank" rel="no-follow nofollow noopener noreferrer">self-hosted open-source tool: Ackee</a>
          </p>
        
        </div>

        
      
      </div>

      
  
    )
}