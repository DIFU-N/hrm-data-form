import { useEffect, useState } from 'react'
import { fetchStaff } from './app/staff'
import { useDispatch } from 'react-redux'
import IntroComp from './pages/IntroComp'
import { fetchDepartment } from './app/department'
import { fetchDivision } from './app/division'
import { fetchWorkLocation } from './app/location'
import { fetchGeoLocation } from './app/geoLocation'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStaff());
    dispatch(fetchDepartment());
    dispatch(fetchDivision());
    dispatch(fetchWorkLocation());
    dispatch(fetchGeoLocation());
  }, [])
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald&family=Yantramanav&family=Six+Caps&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
      </style>
      <IntroComp />
    </>
  )
}

export default App
