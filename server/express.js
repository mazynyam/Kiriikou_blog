import express from 'express'
import session from 'express-session'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
import config from './../config/config'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import shopRoutes from './routes/shop.routes'
import productRoutes from './routes/product.routes'
import orderRoutes from './routes/order.routes'
import postRoutes from './routes/post.routes'
import testimonyRoutes from './routes/testimony.routes'

import Chat from './models/chatModel'

// modules for server side rendering
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import MainRouter from './../client/MainRouter'
import {  StaticRouter , Switch} from 'react-router-dom'
// import config from './../config/config'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import theme from './../client/theme'

//comment out before building for production
// import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()


//comment out before building for production
// devBundle.compile(app)

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors({credentials:true, origin:`http://localhost:${config.PORT}`}))
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: config.jwtSecret,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, sameSite:'none'},

}))
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))


// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', shopRoutes)
app.use('/', productRoutes)
app.use('/', orderRoutes)
app.use('/', postRoutes)
app.use('/', testimonyRoutes)


app.get('*', (req, res) => {
  const sheets = new ServerStyleSheets()
  const context = {}
  let name;
  name = 'Home'
 

  const  markup =  ReactDOMServer.renderToString (
    sheets.collect(
      <StaticRouter location={req.url} context={context}>
          <ThemeProvider theme={theme}>
            <MainRouter />
          </ThemeProvider>
      </StaticRouter>
     )
  )
    if (context.url) {
      return res.redirect(303, context.url)
    }

    const css = sheets.toString()
    res.status(200).send(Template({
      markup: markup,
      css: css,
      name: name
    }))
})

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }
})

export default app
