import React, {useEffect, Suspense} from 'react'
import { connect } from 'react-redux'
import history from './history'
import {Router} from "react-router-dom"
import MenuContainer from './containers/MenuContainer'
import RoutesContainer from './containers/RoutesContainer'
import CastComponent from './components/CastComponent'
import { setMoviesFromBigJson } from './actions/app'

const AnimFilm = React.lazy(() => import('./components/AnimFilm'))
const LoadingFallback = ()=>(<h1>Loading...</h1>)


function App({setMoviesFromBigJson, movies}) {
  useEffect(() => {
    setMoviesFromBigJson()
    // eslint-disable-next-line
  },[])
  return (
    <Router history={history}>
      <div className={'App-body'}>
        <MenuContainer/>
        {
          (movies && Array.isArray(movies)) ? <RoutesContainer /> :
            <Suspense
              fallback={<LoadingFallback />}>
              <AnimFilm />
            </Suspense>
        }
      
        <CastComponent />
      </div>
    </Router>

  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state
})
 
const mapDispatchToProps = (dispatch) => ({
   setMoviesFromBigJson: () => dispatch(setMoviesFromBigJson())
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);
