import React, {useEffect,  useState} from 'react'
import { connect } from 'react-redux'
import SeoComponent from '../components/SeoComponent'
import { setIsPlaying } from '../actions/app'
import {idToPoster} from '../helpers'
import VideoPlayer from '../components/VideoPlayer'

function VideoPlayerComponent({ setIsPlaying, movies, route }) {
  // Preparing local state
  const [videos, setVideos] = useState([])
  
  // Get id from Url
  const { match } = route
  const urlQuery = (match && match.params) ? window.atob(match.params.id) : null

  // Get current movie
  const currentMovie = movies.filter(m=>m.imdb === urlQuery)[0]
  const { aoFiles, identifier } = currentMovie || {aoFiles:null, identifier:null}

  useEffect(() => {
    if (aoFiles) {
      let videosLinks = aoFiles
      .filter(a => ['h.264', '512Kb MPEG4', 'MPEG4'].indexOf(a.format) > -1)
      .map(e=>"https://archive.org/download/"+identifier+e.url)
  
      setIsPlaying({videos: videosLinks, ...currentMovie})
      setVideos(videosLinks)
    }
  
  }, [aoFiles, currentMovie, setIsPlaying, identifier])
  const {title, story } = currentMovie
  
  return (
      <div>
          <SeoComponent
              title={'🎥 🍿 Playing ' + title}
              description={story ? story.slice(0, 100) + '...' : ''}
              image={idToPoster(identifier)}
          />
          {videos ? <VideoPlayer videos={videos} {...currentMovie} /> : null}
      </div>
  )
}


const mapStateToProps = state => ({
    ...state
  })
   
  const mapDispatchToProps = dispatch => ({
    setIsPlaying: file => dispatch(setIsPlaying(file))
   })
  
   export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerComponent);
