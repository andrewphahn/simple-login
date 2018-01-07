import express from 'express'
import path from 'path'

const router = express.Router()

router.get('/', (req, res) => {
  const serverDetails = {
    time: `${new Date()}`,
    nodeVersion: process.version,
    path: path.resolve(`${__dirname}/../..`),
  }

  console.log('Returning details: ', JSON.stringify(serverDetails, null, 2))

  res.json(serverDetails)
})

export default router

