import React, { Suspense } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import useAckee from 'use-ackee'

import AnimFilm from '../components/AnimFilm'
import AboutContainer from './AboutContainer'

const FavoritesContainer = React.lazy(() => import('./FavoritesContainer'))
const VideoPlayerContainer = React.lazy(() => import('./PlayerContainer'))
const DetailContainer = React.lazy(() => import('./DetailContainer'))
const CatalogContainer = React.lazy(() => import('./CatalogContainer'))
const SearchContainer = React.lazy(() => import('./SearchContainer'))

export default function RouteContainer() {
    const location = useLocation()

    useAckee(
        location.pathname,
        {
            server: 'https://stats.cinedantan.com',
            domainId: '4581b0d5-8528-46cb-abe9-2f0159dc3f69',
        },
        {
            ignoreLocalhost: true,
            detailed: true
        }
    )

    return (
        <Switch>
            <Route
                path="/collection/:q?"
                render={props => (
                    <Suspense fallback={<AnimFilm />}>
                        <SearchContainer route={props} />
                    </Suspense>
                )}
            ></Route>

            <Route
                path="/details/:q"
                render={props => (
                    <Suspense fallback={<AnimFilm />}>
                        <DetailContainer route={props} />
                    </Suspense>
                )}
            ></Route>

            <Route
                path="/watch/:id?"
                render={props => (
                    <Suspense fallback={<AnimFilm />}>
                        <VideoPlayerContainer route={props} />
                    </Suspense>
                )}
            />

            <Route
                path="/favorites/:f?"
                render={props => (
                    <Suspense fallback={<AnimFilm />}>
                        <FavoritesContainer route={props} />
                    </Suspense>
                )}
            />

            <Route path="/about/">
                <AboutContainer />
            </Route>

            <Route path="/">
                <Suspense fallback={<AnimFilm />}>
                    <CatalogContainer />
                </Suspense>
            </Route>
        </Switch>
    )
}
