import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App.js'

const root_el = document.getElementById('root')

const render = Component => {
    ReactDom.render(
        <AppContainer>
            <Component />
        </AppContainer>
        ,
        root_el,
    )
}

render(App)

if(module.hot){
    module.hot.accept("./App.js", ()=>{
        const HotApp = require('./App.js').default
        render(HotApp)
    })
}