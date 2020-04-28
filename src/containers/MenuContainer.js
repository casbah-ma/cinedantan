import React from 'react'
import {
    Link
} from "react-router-dom";
import Search from '../components/Search'
import { Menu, Icon } from 'antd';
import { isMobile } from '../helpers'
import { connect } from 'react-redux';
import { Badge } from 'antd';



function MenuContainer ({favorites, isPlaying}) {
    return (
        <Menu mode="horizontal" theme="dark" className={'menu-desktop'}>
            <Menu.Item key="catalog">
                {!isPlaying ? (
                    <Link to="/">
                        <Icon type="unordered-list" />
                        <Badge
                            count={'alpha'}
                            style={{ backgroundColor: '#fff', color: 'black' }}
                        >
                            <span
                                style={{
                                    fontSize: '17px',
                                    marginRight: '25px',
                                }}
                            >
                                Catalog
                            </span>
                        </Badge>
                    </Link>
                ) : (
                    <Link to={'/details/' + btoa(isPlaying.imdb)}>
                        <Icon
                            type="left-circle"
                            style={{ fontSize: '30px', paddingTop: '30px' }}
                        />
                    </Link>
                )}
            </Menu.Item>

            {!isPlaying ? (
                <Menu.Item key="favorites">
                    <Link to={'/favorites/' + btoa(favorites.toString())}>
                        <Badge
                            count={favorites.length}
                            style={{ backgroundColor: '#fff', color: 'black' }}
                            showZero
                        >
                            <span
                                style={{
                                    fontSize: '17px',
                                    marginRight: '20px',
                                }}
                            >
                                My List
                            </span>
                        </Badge>
                    </Link>
                </Menu.Item>
            ) : null}

          

            {!isPlaying ? (
                <Menu.Item key="code">
                    <a
                        href="https://github.com/yelabbassi/cinedantan"
                        target="_Blank"
                        rel="noopener noreferrer"
                    >
                        <Icon type="github" />
                        Github
                    </a>
                </Menu.Item>
            ) : null}

            {!isPlaying ? (
                <Menu.Item key="about">
                    <Link to="/about">
                        <Icon type="info-circle" />
                        {isMobile && 'About'}
                    </Link>
                </Menu.Item>
            ) : null}

            {!isMobile && !isPlaying ? (
                <Menu.Item
                    key="search"
                    style={{ float: 'right', padding: '5px' }}
                >
                    <Link to="/collection">
                        <Search />
                    </Link>
                </Menu.Item>
            ) : !isPlaying ? (
                <Menu.Item key="search">
                    <Link to="/collection">
                        <Icon type="search" />
                        Search
                    </Link>
                </Menu.Item>
            ) : null}
        </Menu>
    )
}
  
const mapStateToProps = state => ({
  ...state
})
 
const mapDispatchToProps = dispatch => ({
  //addFile: file => dispatch(addFile(file))
 })

 export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
