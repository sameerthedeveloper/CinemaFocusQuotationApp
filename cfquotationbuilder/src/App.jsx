import React from 'react'
import './App.css'
import DataEntryPage from './components/dataEntryPage'
import DataMangementPage from './components/dataMangementPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AudioConfigDisplay from './components/AudioConfigDisplay'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataEntryPage />} />
        <Route path="/manage" element={<DataMangementPage />} />
        <Route path='test'  element={<AudioConfigDisplay/>}/>
      </Routes>
    </Router>
  )
}

export default App
