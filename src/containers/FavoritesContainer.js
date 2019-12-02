import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Slider from '../components/Slider'
import AnimFilm from '../components/AnimFilm'
import Share from '../components/Share'
import Spacer from '../components/Spacer'
import SeoComponent from '../components/SeoComponent'



function FavoritesContainer({ movies, route, favorites }) {
  const { match } = route
  let urlQuery
  
  try {
    urlQuery = (match && match.params) ? atob(match.params.f) : null
  } catch (e) {
    
  }
 
  const [favoritesMovies, setFavoritesMovies] = useState([])

  useEffect(() => {
    if (urlQuery) {
      const filterFavoritesFromMovies = movies.filter((m) => urlQuery.split(',').indexOf(m.imdb) > -1)
      setFavoritesMovies(filterFavoritesFromMovies)
    }   
  }, [movies, urlQuery])
  
  

  return (
    <div style={{ width: '100%', minHeight: '130vh' }}>
      <SeoComponent
        title={"🎥 🍿 CineDantan - Favorites"}
      />
      <Spacer top={'10vh'} />
     
      {(!favoritesMovies || !urlQuery) ?
        <div style={{textAlign:'center'}}>
          <AnimFilm />
          <p>To display your favorites here, Press on the little hearts (bottom right of posters) </p>
          </div> :
        <div>
          <Slider posters={favoritesMovies} title={''} />
          <Share url={window.location.href} />
        </div>
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

 export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
