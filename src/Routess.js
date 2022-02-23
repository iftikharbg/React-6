import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './HomePage'
import Users from './components/Users'
export default function Routess() {
  return (
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path='/users' element={<Users />} />
            </Routes>
  )
}
