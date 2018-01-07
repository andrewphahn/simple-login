import path from 'path'
import request from 'supertest'
import app from '../app'

describe('Test the /api/detail', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/detail')
    expect(response.statusCode).toBe(200)
    expect(response.body.time).toBeDefined()
    expect(response.body.nodeVersion).toMatch(/v\d+\.\d+\.\d+/)
    expect(response.body.path).toBe(path.resolve(`${__dirname}/../..`))
  })
})
