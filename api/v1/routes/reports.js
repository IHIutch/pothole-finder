import express from 'express'
import { Report } from '../models/index'

const router = express.Router()

router.get('/', (req, res) => {
  Report.findAll()
    .then((reports) => {
      res.json(reports)
    })
    .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
  const { lat, lng, accelerometer, gyroscope } = req.body

  Report.create({
    lat,
    lng,
    accelerometer,
    gyroscope,
  })
    .then((data) => {
      res.status(201).json(data.id)
    })
    .catch((err) => console.log(err))
})

export default router
