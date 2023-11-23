import React from 'react'
import "./Results.css"
import { results } from '../../assets'

const Results = () => {
  return (
    <div className='results'>
      <div>
        <h2>Our outstanding <span style={{ color: "#FF693D" }}>results</span></h2>
        <div>
          <img src={results} alt='results'/>
        </div>
      </div>
    </div>
  )
}

export default Results