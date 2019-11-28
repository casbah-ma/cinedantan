import {
    SET_SEARCH,
    SET_CURRENT,
    SET_IS_PLAYING,
    ADD_FAVORITES,
  SET_VIEWING_HISTORY,
    SET_MOVIES
  } from '../actions'
  
  const initialState = {
    movies: [],
    moviesCats: [],
    searchQ: '',
    current: null,
    isPlaying:false,
    viewingHistory: [],
    favorites: []
  }
  
  export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        
      }
       case SET_SEARCH:
          return {
            ...state,
            searchQ: action.payload,
            
          }
          case SET_CURRENT:
            return {
              ...state,
              current: action.payload,
          }
        
          case SET_IS_PLAYING:
            return {
              ...state,
              isPlaying: action.payload,
          }
        
        case SET_VIEWING_HISTORY:
          const progress = action.payload
          const viewingHistory = state.viewingHistory
          const movieExistInHistory = viewingHistory.filter((m)=>m.imdb===progress.imdb)[0]
  
          // Case Empty history
          if (!viewingHistory || viewingHistory.length === 0) {
            return {
              ...state,
              viewingHistory: [progress],
            }
          }
  
          // Case new movie
          if (!movieExistInHistory) {
            return {
              ...state,
              viewingHistory: [...viewingHistory, progress],
            }
          }
  
          //Case existing movie
          const updateViewingHistory = viewingHistory.map(v => {
            if (v.imdb === progress.imdb) {
              return {...v, ...progress}
            }
            return v
          })
  
          return {
              ...state,
              viewingHistory: updateViewingHistory,
          }
        
        case ADD_FAVORITES:
          const favorite = action.payload
          const favorites = state.favorites
          const isFavoriteExist = (state.favorites.indexOf(favorite) > -1)
          
          if (isFavoriteExist) {
            const filtredFavorites = favorites.filter(f=>f !== favorite)
            return {
              ...state,
              favorites: [...filtredFavorites],
            }
          } 
  
          return {
              ...state,
              favorites: [...state.favorites, action.payload],
          }
       default:
        return state
      }
  }