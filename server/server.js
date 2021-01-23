import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'
import http from 'http'
import socketio from 'socket.io'
const { addUser, getUser, getUsersInChat, removeUser } = require('./users') 
// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket)=>{
  socket.on('join', ({ uuid,name }, callback)=>{
    const { error, user } = addUser({ id:socket.id, uuid, name})
    if(error) return callback(error)

    socket.emit('message', { user:'admin', text:`Hello ${user.name}, welcome to Kiriikou Chat Support`});
    socket.broadcast.to(user.uuid).emit('message', { user:'admin', text:`A new user with id ${user.uuid} has joined`});
    socket.join(user.uuid)
    callback()
  });

  socket.on('sendMessage', (message, callback)=>{
    const user = getUser(id.id)

    io.to(user.uuid).emit('message', { user: user.uuid, text:message});
    callback()
  })

  socket.on('disconnect', ()=>{
    console.log('User left')
  })
} )

server.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
