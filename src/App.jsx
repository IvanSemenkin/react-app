import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Video from './components/video.jsx'
import { VIDEOS } from './components/videos.js'

function App() {
  return (
    <>
      <div className='video-container'>
        {
          VIDEOS.map((video) => (
            <Video key={video.id} title={video.title} chanelName={video.chanelName} img={video.img} />
          ))
        }
      </div>
    </>
  )
}

export default App
