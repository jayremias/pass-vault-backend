import { Router } from 'express'

const router = Router()

router.use('/', (req, res) => {
  res.send({ message: 'ok' })
})

export { router }
