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
  const { username, password } = req.body
  // TODO: This would be a service + data access layer, not directly in the route
  console.log(`Login request received, username: '${username}', password: '${password}'`)
  validateInput(req.body).then(({ errors, isValid }) => {
    if (isValid) {
      // TODO: This is where actual would take place, not in validation
      console.log('Login SUCCESS')
      res.json({ username, success: true, jwt: 'ADummyJWT' })
    } else {
      console.log('Login FAILED')
      res.json({ success: false, message: 'Invalid Credentials', errors })
    }
  })
})

export default router
