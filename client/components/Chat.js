import React, {useEffect, useState} from 'react'
import io from 'socket.io-client'
import ChatLogin from './ChatLogin'
import useLocalStorage from './hooks/useLocalStorage'
import InfoBar from './InfoBar'
import Input from './Input'
import Messages from './Messages'
import config from '../../config/config'

let socket;

const Chat = ( ) => {
    const [ messages, setMessages] = useState([])
    const [ message, setMessage] = useState([])
    const [ uuid, setId ] = useLocalStorage('id')
    const [ name, setName ] = useLocalStorage('name')

    const ENDPOINT =  `localhost:${config.port}`
    

    socket = io(ENDPOINT)
    useEffect(()=>{
        socket = io(ENDPOINT)

        setId(uuid)
        setName(name)
        socket.emit('join',{ uuid, name }, ()=>{
           
        });

        return ()=>{
            // socket.emit('disconnect')
            socket.off()
        }
    }, [ENDPOINT, uuid, name]);

    useEffect(()=>{
        socket.on('message', (message)=>{
            setMessages([...messages, message])
        })
    },[messages])
    const sendMessage = e =>{
        e.preventDefault()
        if(message){
            socket.emit('sendMessage', message, ()=> setMessage(''))
        }
    }
    console.log(message, messages)
    const ChatMessage = ()=>{
        return(
        <div>
            <InfoBar />
            <Messages messages={messages} setId={uuid} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </div>
        )
    }
    return (
        <div  className="chat-popup"  id="myForm">
            uuid : <ChatMessage  /> 
                ?
                <ChatLogin onIdSubmit={setId}/>  
        </div>
    )
}

export default Chat;