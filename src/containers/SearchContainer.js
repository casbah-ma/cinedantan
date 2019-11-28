import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Slider from '../components/Slider'
import AnimSearch from '../components/AnimSearch'
import SearchBox from '../components/Search'
import Spacer from '../components/Spacer'
import SeoComponent from '../components/SeoComponent'
import { isMobile, imdbToMovie, idToPoster } from '../helpers'
import Share from '../components/Share'
import FlexSearch from 'flexsearch/dist/flexsearch.min'
//import index from '../database/searchEngine'


var index = new FlexSearch({
  profile:"fast",
  depth: 5,
  async: true
});

let isFired = false



function App({ movies, searchQ, route }) {
  const { match } = route
  const urlQuery = (match && match.params) ? match.params.q : null

  const [searchQuery, setSearchQuery] = useState(null)
  const [results, setResults] = useState([])

  useEffect(() => {
    if (!isFired) {
      for (let i = 0; i < movies.length; i++){
        const { title, imdb, year, director, writers, stars, genre, story } = movies[i]
        index.add(imdb, JSON.stringify({ imdb, title, year, director, writers, stars, genre, story }))
        if (i === movies.length - 1) {
          isFired = true
        }
      }
    }
    

  },[movies])

 
  useEffect(() => {
    setSearchQuery(searchQ)
  }, [searchQ])

  useEffect(() => {
    if (searchQuery) {
      index.search(searchQuery, {
        limit: 100
      }, function (results) {
          const theMovies = results.map((r) => {
            return imdbToMovie(r, movies)
          })       
          setResults(theMovies)
    });
    }   
  }, [searchQuery, movies])
  
  useEffect(() => {
    if (urlQuery && !searchQuery) {
      setSearchQuery(urlQuery)
    }
  },[urlQuery, movies, searchQuery])
  

  return (
    <div style={{ width: '100%', minHeight: '150vh' }}>
      <SeoComponent
        title={'Collection [ ' + (searchQuery+' ]' || ']')}
        description={results.map((r) => r.title + ' by ' + r.director) + '...'}
        image={(results && results[0]) ? idToPoster(results[0].identifier) : null}
      
      />
    <div className={'page-border-top'} />
    <Spacer top={'7vh'}/>
     

      {isMobile ?
        
        <div style={{
          padding: '50px',
          position: 'fixed',
          bottom: 0, backgroundColor:
            '#141312', width: '100%', zIndex: 99999999999,
          borderTop:'1px solid white'
        }}>
          <SearchBox />
        </div>
        : null
      }

      {!searchQuery ? <AnimSearch /> : <div>

       
     
        <Slider posters={results} title={searchQuery} isSearch />
        {results && results.length === 0 ? <AnimSearch /> : null}

        <Share url={window.location.href} title={'Share your Findings'} />
        
      </div>}
      
        
      

      
        
      
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
