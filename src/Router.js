import React from 'react'
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom'
import Loadable from 'react-loadable'
import LoadingComponent from './components/LoadingComponent'

//components
import Layout from './containers/Layout'
const AsyncHome = Loadable({
    loader: () => import('./containers/Home'),
    loading: LoadingComponent
})
const AsyncTest = Loadable({
    loader: () => import('./containers/Test'),
    loading: LoadingComponent
})
const AsyncNotFound = Loadable({
    loader: () => import('./containers/404'),
    loading: LoadingComponent
})
const RouterMap = ({childProps}) =>
    <Router>
        <div>
            <Layout/>
            <Switch>
                <Route path="/" exact component={AsyncHome} props={childProps}/>
                <Route path="/test" component={AsyncTest} props={childProps}/>
                <Route component={AsyncNotFound}/>
            </Switch>
        </div>
    </Router>

export default RouterMap