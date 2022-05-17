import express from 'express'
import cors from 'cors'
import path from 'path'

import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const app = express()
const PORT = process.env.PORT || 3001

//const staticFolder = path.join(__dirname, 'public')
const distPath = path.join(__dirname, '/../dist/')
const staticImages = path.join(__dirname, '/public/img/')

import hamsters from './routes/hamsters.js'
import matches from './routes/matches.js'
import matchWinners from './routes/matchWinners.js'
import winners from './routes/winners.js'
import losers from './routes/losers.js'

// Middleware
// CORS öppnar vårt projekt så det kan användas från andra domäner
app.use(cors())

// Parse request body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve static files in this folder
app.use(express.static('public'))

//NYTT för frontend --> dist/index.html
app.use(express.static(distPath))
//För bilder --> public/img/hamster-3.jpg
app.use('/img', express.static(staticImages))

// Logger - skriv ut information om inkommande request
app.use((req, res, next) => {
  console.log(`Logger: ${req.method}  ${req.url} `, req.body)
  next()
})

// Routes eller Endpoints
app.use('/hamsters', hamsters)
app.use('/matches', matches)
app.use('/matchWinners', matchWinners)
app.use('/winners', winners)
app.use('/losers', losers)

// Övriga endpoints, för att fungera med React Router i frontend
app.all('*', (req, res) => {
  res.sendFile(distPath + 'index.html')
})

// Starta server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`)
})
