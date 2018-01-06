import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config'

import detailRoute from './route/detailRoute'
import userRoute from './route/userRoute'

const app = express()

app.use(bodyParser.json())

app.use('/api/detail', detailRoute)
app.use('/api/login', userRoute)

const compiler = webpack(webpackConfig)

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
}))

app.get('/*', (req, res) => {
  console.log('get', req)
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app
