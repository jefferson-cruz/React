'use strict'

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const $ = require('whacko')
const Title = require('./title')

const TitleDOMComponent = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Title)
)

console.log($(TitleDOMComponent).get(0).tagName)