import React from 'react'
import { connect } from 'react-redux';
import { setSearch } from '../actions/app'
import history from '../history';
import { Input } from 'antd';
import {isMobile} from '../helpers'
const { Search } = Input


function SearchComponent({setSearch}) {
  
  return <Search
    placeholder="Title, director, cast, year..."
    style={{ width: isMobile ? '100%' : '20vw', paddingRight:'10px', }}
        onSearch={value => {
        setSearch(value)
        history.push('/collection/' + value)
      }}
     
    />
    
}


const mapStateToProps = state => ({
    ...state
  })
   
  const mapDispatchToProps = dispatch => ({
    setSearch: q => dispatch(setSearch(q))
   })
  
   export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
  