import React from 'react'
import LazyLoad from 'react-lazyload'
import { Link } from "react-router-dom"
import Img from 'react-image'
import {idToPoster} from '../helpers'
import AddToFavorites from './AddToFavorites'
import {Icon,  Rate} from 'antd'


const Loader = ({identifier,isDetail})=>{
    return <Img
    src={idToPoster(identifier, false, 'xs')}
    decode={false}
    style={{  width: 'auto',
    maxWidth: '100%',
    height: isDetail ? 'auto' : '45vh',
    maxHeight: '75vh',
    borderRadius: '20px',
    boxShadow: '0px 0px 8px 0px #080707',
  
    backgroundColor: 'white',
    marginLeft: 'auto',
        marginRight: 'auto',
        filter: 'blur(2px)'
    }}
/>
}

  
export default function SliderContent({data, isDetail}) {
    const { identifier, imdb, rating  } = data
    const hrefLink = isDetail ? '/watch/'+ window.btoa(imdb)
        : imdb ? '/details/'+ window.btoa(imdb) : '#'

    return <LazyLoad> <div className={'dvd-box'} >
   
        
       
        
            
        <div style={{ height: isDetail ? '70vh' : '50vh', width:'auto' }}>
        <Link to={hrefLink} >
                <Img
                    src={idToPoster(identifier, true)}
                    loader={<Loader identifier={identifier} isDetail={isDetail}/>}
                    decode={false}
                    style={{
                        width: 'auto',
                        maxWidth: '100%',
                        height: isDetail ? 'auto' : '45vh',
                        maxHeight: '75vh',
                        borderRadius: '20px',
                        boxShadow: '0px 0px 8px 0px #080707',
                        objectFit: isDetail ? '' : 'contain',
                        backgroundColor: 'white',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                />
                {
                    isDetail  &&
                        <div className={'play-button'}>
                            <Icon type="play-circle" style={{fontSize:'100px', color:'white'}}/>
                        </div> 
                }


                {/**rating */}
                <div style={{position:'absolute',  left:'10%'}}>
                <Rate character={<Icon type="heart" />} disabled defaultValue={Math.abs(rating / 2)} />
                </div>
               
            </Link>
            <div className={'fav-container'}>
            <AddToFavorites imdb={imdb}/> 
        </div>
            </div>
           
         
            
       
    </div> </LazyLoad>
}



