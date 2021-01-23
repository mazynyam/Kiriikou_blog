import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import {adminSignin} from '../auth/api-auth'
import auth from '../auth/auth-helper'
import { Container, Row, Card, Form, Col, Button} from 'react-bootstrap'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'

export default function Login(props) {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
      })
    
      const clickSubmit = () => {
        const user = {
          email: values.email || undefined,
          password: values.password || undefined
        }
    
        adminSignin(user).then((data) => {
          if (data) {
            setValues({ ...values, error: data.error})
          } else {
            auth.authenticate(data, () => {
              setValues({ ...values, error: '',redirectToReferrer: true})
            })
          }
        })
      }
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
      }
    
      const {from} = props.location.state || {
        from: {
          pathname: '/admin'
        }
      }
      const {redirectToReferrer} = values
      if (redirectToReferrer) {
          return (<Redirect to={from}/>)
      }
    return (
        <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
        
          <Row className="justify-content-center">
            <Col md="6">
                <Card className="p-2">
                <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email" onChange={handleChange('email')} value={values.email} id='email' />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" onChange={handleChange('password')} value={values.password} id='password'/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={clickSubmit}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </Card>    
            </Col>
          </Row>
        </CContainer>
      
      </div>
    )
}
