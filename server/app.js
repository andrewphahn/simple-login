import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config'

import detail from './route/detailRoute'

const app = express()

app.use(bodyParser.json())

app.use('/api/detail', detail)

const compiler = webpack(webpackConfig)

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
}))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

module.exports = app
