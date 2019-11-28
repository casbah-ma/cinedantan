import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from "react-player/lib/players/FilePlayer"
import { setIsPlaying, setViewingHistory } from '../actions/app'

function App({ videos, identifier, imdb, setIsPlaying, setViewingHistory, viewingHistory }) {
  
  const seekToLastTime = () => {
    const isThisMoviePlayed = viewingHistory.filter(v => v.imdb === imdb)[0]
    //console.log('isThisMoviePlayed', isThisMoviePlayed)
        
    if (isThisMoviePlayed && isThisMoviePlayed.playedSeconds && homeVidPlayer && homeVidPlayer.current) {
      homeVidPlayer.current.seekTo(isThisMoviePlayed.playedSeconds)
    }
  }
  
  
  const [videoList, setVideoList] = useState([])
  
  const homeVidPlayer = useRef(null);

  // Transfering to local state
  // Why: Todo, implements multi-tracks
  useEffect(() => {
    setVideoList(videos)
    
  }, [videos])

  // Unmounting
  useEffect(() => {
    return () => {
      setIsPlaying(null)
    }
  }, [setIsPlaying])


  // casting
  useEffect(() => {
    /*if (videoList && videoList[0]) {
      var device = new Castjs();
      var source = videoList[0]
   }*/

  }, [ imdb, homeVidPlayer])
  
  
  return (
    <div>
      
    {
      (videoList && videoList[0] && videoList.length<6) ? <ReactPlayer
      ref={homeVidPlayer}
      width='100vw'
      height='100vh'
      url={videoList}
      pip={false}
      playing={true}
      controls={true}
      light={false}
      loop={false}
      muted={false}
      onReady={() => {}}
      onStart={seekToLastTime}
      onPlay={() =>{ }}
      onEnablePIP={() => {}}
      onDisablePIP={() => {}}
      onPause={() => {}}
      onBuffer={() => {}}
      onSeek={e => {}}
      onEnded={() => {}}
      onError={e => console.log('onError', e)}
      onProgress={(e) => {setViewingHistory({ imdb, ...e })}}
      onDuration={(e) => {}}
        /> : <iframe
            title="archive-org"
            src={"https://archive.org/embed/" + identifier}
            width="640"
            height="580"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen>
          </iframe>
}
</div>
            
           
  )
}

 const mapStateToProps = state => ({
  ...state
})
 
const mapDispatchToProps = dispatch => ({
  setIsPlaying: file => dispatch(setIsPlaying(file)),
  setViewingHistory: history => dispatch(setViewingHistory(history))
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);