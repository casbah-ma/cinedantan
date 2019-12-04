import React from 'react';
import { connect } from 'react-redux';
//import { actions_here } from './actions/app';
import Slider from '../components/Slider'
import Spacer from '../components/Spacer'
import SeoComponent from '../components/SeoComponent'
import Fade from 'react-reveal/Fade';
import { sortByKey, imdbToMovie } from '../helpers'

function App({ movies, moviesCats, viewingHistory, favorites }) {

  // Select not finished movies only
  //eslint-disable-next-line array-callback-return
  const continueWatchingIds = viewingHistory.map(v => {
    if (v.played <= 0.97) {
                              return v.imdb
                          }
  })

  const isThereAnyContinueWatching = continueWatchingIds && Array.isArray(continueWatchingIds) && continueWatchingIds[0]

  // Building Suggestion // Refactor please
  const favoritesRelated = (favorites && Array.isArray(favorites) && movies && Array.isArray(movies)) ? imdbToMovie(favorites, movies).map(e => e.related) : []
  const mergedFavoritesRelated = [].concat.apply([], favoritesRelated)
  const mergedFavoritesRelatedExcludeFav = mergedFavoritesRelated.filter(function (x) { 
      return favorites.indexOf(x) < 0
  });

  const favToSuggestions = imdbToMovie(mergedFavoritesRelatedExcludeFav, movies)
  
  return (
    <div className={'catalog-screen'} style={{ maxWidth: '100%' }}>
      <SeoComponent/>
      <div className={'page-border-top'} />
      
      {
        (isThereAnyContinueWatching) &&
          (<div>
            <Spacer top={'5vh'} />
              <Slider posters={imdbToMovie(continueWatchingIds, movies)} title={'To be continued'} />
          </div>)
      }

      {
        (favToSuggestions && favToSuggestions.length>2) &&
          (<div>
            <Spacer top={'5vh'} />
              <Slider posters={favToSuggestions} title={'You might like'} />
          </div>)
      }
      

      <Fade top>
        <Spacer top={(isThereAnyContinueWatching || favToSuggestions) ? '3vh':'5vh'} />
        {
          moviesCats.map((cat,i)=> <Slider key={i} posters={sortByKey(movies.filter(m=>(m.genre.indexOf(cat)>-1)), 'rating')} title={cat}  />)
        }
        <Spacer top={'6.9vh'}/>
      </Fade>
      
    </div>
  )
}

const mapStateToProps = state => ({
  ...state
})
 
const mapDispatchToProps = dispatch => ({
  //addFile: file => dispatch(addFile(file))
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);
