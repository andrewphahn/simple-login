import express from 'express'
import isEmpty from 'lodash/isEmpty'

const router = express.Router()

function validateInput(data) {
  const errors = { }

  return new Promise((resolve) => {
    if (data.username !== 'demo') {
      errors.username = 'Invalid username'
    }
    if (data.password !== 'password1') {
      errors.password = 'Invalid password'
    }
    resolve({
      errors,
      isValid: isEmpty(errors),
    })
  })
}


router.post('/', (req, res) => {
  console.log(`Login request received, username: '${req.body.username}', password: '${req.body.password}'`)
  validateInput(req.body).then(({ errors, isValid }) => {
    if (isValid) {
      // TODO: This is where actual would take place, not in validation
      console.log('Login SUCCESS')
      res.json({ success: true, jwt: 'ADummyJWT' })
    } else {
      console.log('Login FAILED')
      res.json({ success: false, message: 'Invalid Credentials', errors: errors })
    }
  })
})

export default router
