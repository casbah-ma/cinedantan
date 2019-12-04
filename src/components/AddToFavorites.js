import React from 'react'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import { addFavorites } from '../actions/app'

const isThisMovieAlreadyLiked = (imdb, favorites) => {
    return favorites ? favorites.indexOf(imdb) > -1 : false
}

const AddToFavorites = React.memo(({ addFavorites, imdb, favorites }) => {
    return (
        <div onClick={() => addFavorites(imdb)}>
            {isThisMovieAlreadyLiked(imdb, favorites) ? (
                <Icon
                    type="heart"
                    style={{ fontSize: '40px', color: 'rgba(255,255,255,1)' }}
                    theme={'twoTone'}
                    twoToneColor={'white'}
                    className={'glitch'}
                />
            ) : (
                <p className={'add-to-my-list'}>+ My List</p>
            )}
        </div>
    )
})

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({
    addFavorites: data => dispatch(addFavorites(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavorites)
