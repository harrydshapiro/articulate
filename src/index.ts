import express from 'express'
import router from './router'

const app = express()
app.use(router)
app.use(express.static('public'))

app.listen(process.env.PORT || 8080, () => {
  console.log('app running on port 8080')
})