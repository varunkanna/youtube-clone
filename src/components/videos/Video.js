import React from 'react'
import {AiFillEye} from 'react-icons/ai'
import './Video.css'

const Video = () => {
  return (
    <div className='app__video'>
      <div className='video_top'>
        <img className='video_img' src='https://i.ytimg.com/vi/YysDQieIkIo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdOqd_WsBCuXqr2GO88-_rX3w-8Q' alt='' />
        <span className='video_top_span'>05:16</span>
      </div>
      <div className='video_title'>
        Exclusive Clip | 😋 &#128512; Loki that multiverse concept based gem series list
      </div>
      <div className='video_details'>
        <span><AiFillEye /> 16m Views </span>
        <span className='video_details_span'>6 days age</span>
      </div>
      <div className='video_chennal'>
        <img src='https://yt3.ggpht.com/5YiK22wiL_PmOjfZa2JqylsgLDHHdwD-aeoh11znaqc8BMbQVAauJwlgeeNTAaS4ykLNAIGpWA=s68-c-k-c0x00ffffff-no-rj' alt='' />
        <p>Marvel</p>
      </div>
    </div>
  )
}

export default Video