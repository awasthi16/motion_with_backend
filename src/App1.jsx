import React from 'react'
// import Header from './Header'
// import Home from './Nav'
// import SummitraStaticUI from './Footer'
// import Nav from './Nav'
import Footer from './Footer'
// import Bottom from './Bottom'
// import Cards from './Cards'
import Animation from './Animation'
import Faq from './Faq'
import Nav from './Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ticket from './Ticket'

const App = () => {
  return (
    <>

  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/ticket' element={<Ticket/>}/>
     <Route path='/' element={<Animation/>}/>


  </Routes>
     {/* <Animation/>
   <Faq/> */}
  
  </BrowserRouter>
  
 
    {/* <Header/> */}
    {/* <Nav/> */}
   
    {/* <Cards/> */}
    {/* <Bottom/> */}
    
    </>
  )
}

export default App