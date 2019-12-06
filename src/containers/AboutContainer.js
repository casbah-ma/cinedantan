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
          <p>
          Once upon a time, in Canada, there was a bored software developer.
          </p>
          <p>
          Every day, after very long hours spent coding different projects, sometimes for his dreams software, 
            most of the times his nightmares (we all need money, right ?!), he would watched a movie and try to escape his mind.
  
          </p>
          <p>
          Finally he got bored by the so-called "Original" productions from big streaming names and decided to look elsewhere, precisely, in the Public Domain Movies.

          </p>
          <p>
          He tried Archive.org and they had a priceless collection of what he wanted to watch, but their UI was not as bling bling as he was used to, so he decided to take a few days and build CineDantan.com

          </p>
        
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