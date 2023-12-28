import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function About() {
  return (<Card>
 <div className='about'>
     <h1>ANONYMOUS FEEDBACK </h1>
     <p>This is a simple anonymous feedback website. It was created as part of the Udacity Full Stack Web Developer Nanodegree Program.</p>
   </div>
   <p>VERSION 1.1.22</p>
   <p>
    <Link to='/'>Back to Home</Link>
   </p>

  </Card>
   
  )
}

export default About
