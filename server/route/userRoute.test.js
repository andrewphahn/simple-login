import request from 'supertest'
import app from '../app'

const USER_NAME = 'demo'
const USER_PASSWORD = 'password1'

describe('Test the /api/login', () => {
  test('It should not be successful with invalid password', async () => {
    const response = await request(app).post('/api/login')
      .type('json')
      .send({ username: USER_NAME, password: 'badpassword' })
    expect(response.statusCode).toBe(200)
    expect(response.body.success).toBe(false)
    expect(response.body.jwt).toBeUndefined()
    expect(response.body.errors.password).toBeDefined()
  })

  test('It should not be successful with invalid username', async () => {
    const response = await request(app).post('/api/login')
      .type('json')
      .send({ username: 'Oren', password: USER_PASSWORD })
    expect(response.statusCode).toBe(200)
    expect(response.body.success).toBe(false)
    expect(response.body.jwt).toBeUndefined()
    expect(response.body.errors.username).toBeDefined()
  })

  test('It should be successful with valid username and password', async () => {
    const response = await request(app).post('/api/login')
      .type('json')
      .send({ username: USER_NAME, password: USER_PASSWORD })
    expect(response.statusCode).toBe(200)
    expect(response.body.success).toBe(true)
    expect(response.body.jwt).toBeDefined()
    expect(response.body.errors).toBeUndefined()
  })
})
