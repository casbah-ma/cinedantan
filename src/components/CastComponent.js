import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import castImage from '../images/cast.png'
import cast from '../cast'
//import history from '../history';

import { idToPoster } from '../helpers'

let device = new cast();

function CastComponent({ isPlaying, viewingHistory }) {

    const isThisMoviePlayed = isPlaying ? viewingHistory.filter(v => v.imdb === isPlaying.imdb)[0] : null

    useEffect(() => {
        
    })
   
    return (<div>
    {   (isPlaying && device && device.available) ?
        <div style={{position:'fixed', bottom: '10vh', right:'5vw', backgroundColor:'black', padding:'20px', borderRadius:'50%'}}>
          <img style={{float:'right'}} src={castImage} alt="cast" width="20" height="20" onClick={() => {
                    if (device && device.available && isPlaying && isPlaying.videos && isPlaying.videos[0]) {
                        const metaData =  {
                            title:       isPlaying.title,
                            poster:      idToPoster(isPlaying.identifier),
                            muted:  false,
                            paused: false,
                            time:   isThisMoviePlayed ? isThisMoviePlayed.playedSeconds : 0
                          }
            
                        device.cast(isPlaying.videos[0], metaData);
                          
                        /*
                        if (device.receiver) {
                            history.push('/')
                        }
                        */
          } 
        }} />
        
        </div> : null
        }
    </div>
    )
}


const mapStateToProps = state => ({
    ...state
  })
   
  const mapDispatchToProps = dispatch => ({
    //addFile: file => dispatch(addFile(file))
   })
  
   export default connect(mapStateToProps, mapDispatchToProps)(CastComponent);
  