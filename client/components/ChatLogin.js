import React, {useRef, useState } from 'react'
import {  Form, Button } from 'react-bootstrap'
import { v4 as uuidV4} from 'uuid'

export default function ChatLogin({onIdSubmit}) {
    const idRef = useRef()
    const nameRef = useRef()
    const [values, setValues] =useState({name:''})
    function handleSubmit(e){
        e.preventDefault()
        onIdSubmit(idRef.current.value, nameRef.current.value)
    }
    function createNewIdAndName(){
        onIdSubmit(uuidV4())
    }

   
    return (
        <div className='form-container'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Make Chat Request</Form.Label>
                        <Form.Control className='w-100' type='text' ref={idRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Your name</Form.Label>
                        <Form.Control className='w-100' type='text' ref={nameRef} onChange={(e)=>e.target.values} required />
                    </Form.Group>
                    <div className=' d-flex'>
                    <Button variant='secondary' onClick={createNewIdAndName}>Create Request</Button>
                    </div>
                </Form>
        </div>
    )
}
