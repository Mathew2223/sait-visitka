import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Description from './Description.jsx'
import Program from './Program.jsx'
import Price from './Price'
import Reviews from './Reviews'
import Footer from './Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Description />
        <Program />
        <Price />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}
