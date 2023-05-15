import { useEffect, useState } from 'react'
import { fetchStaff } from './app/staff'
import { useDispatch } from 'react-redux'
import IntroComp from './pages/IntroComp'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStaff())
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
