import React from 'react'
import "./Login.css"
import Form from '../Form/Form'

const Login = () => {
  return (
    <div className='login'>
      <div>
        <div>
          <h1>Visit the centre for a personalised</h1>
          <h1 style={{color:'#FF693D'}}>experience</h1>
          <ul>
            <li>Take a tour of the centre to experience our interactive classes</li>
            <li>Get Free 1-1 counselling & find the right course for you</li>
            <li><span>Visit us to avail exclusive discounts</span></li>
          </ul>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Login