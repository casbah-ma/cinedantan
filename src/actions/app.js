import oboe from 'oboe'
import {MOVIES_JSON_URL} from '../constants'

import {
    SET_SEARCH,
    SET_CURRENT,
    SET_IS_PLAYING,
    ADD_FAVORITES,
    SET_VIEWING_HISTORY, 
    SET_MOVIES
} from './index'
import history from '../history';

export const setViewingHistory = (movie) => {
    return {
        type: SET_VIEWING_HISTORY,
        payload: movie
    }
}

export const setSearch = (q) => {
    history.push('/search/'+q);
    return {
        type: SET_SEARCH,
        payload: q
    }
}

export const setCurrent = (current) => {
    history.push('/watch/'+current);
    return {
        type: SET_CURRENT,
        payload: current
    }
}

export const setIsPlaying = (boolean) => {
    return {
        type: SET_IS_PLAYING,
        payload: boolean
    }
}

export const addFavorites = (fav) => {
    return {
        type: ADD_FAVORITES,
        payload: fav
    }
}



// thunk stuff
export const setMoviesDb = (movies) => {
    return {
        type: SET_MOVIES,
        payload: movies
    }
}

const fetchMoviesStream = () => {
    return oboe(MOVIES_JSON_URL)
}

export const setMoviesFromBigJson = () => {
    return function(dispatch) {
        return fetchMoviesStream()
            .done((movies) =>{dispatch(setMoviesDb(movies))} )
            .fail(()=>{/**Do something */})
      
      };
}