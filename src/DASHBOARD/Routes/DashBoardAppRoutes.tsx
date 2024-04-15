import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../shared/Layout'
import Dashboard from '../Pages/Dashboard'
import Help from '../Pages/Help'
import MyListings from '../Pages/Listings'
import Profile from '../Pages/Profile'
import PropertyRequests from '../Pages/PropertyRequests'
import Settings from '../Pages/Settings'
import Subscription from '../Pages/Subscription'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='help' element={<Help/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='property-requests' element={<PropertyRequests/>}/>
        <Route path='/listings' element={<MyListings/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/subscription' element={<Subscription/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes