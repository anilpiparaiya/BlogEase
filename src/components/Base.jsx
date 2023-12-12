import React from 'react'
import CustomNavbar from './CustomNavbar'

const Base = ({title="Welcome to our website", children}) => {
  return (
    <div className='container-fluid p-0 m-0'>
        <CustomNavbar />
        <h1>This is footer</h1>
    </div>
  )
}

export default Base