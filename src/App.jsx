import { useEffect, useState } from 'react'
import IntroComp from './components/IntroComp'
import { fetchCharacters } from './app/staffSlice'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])
  return (
    <>
      <IntroComp />
    </>
  )
}

export default App
