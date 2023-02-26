import React from 'react'
import { useEffect, useState } from 'react'
import { DATA } from './Data'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
const App = () => {
    const [url, setUrl] = useState(null)
    const changeUrl = (url) => {
        setUrl(url)
    }



    return (
        <div>
            <div className='header'>mStation</div>
            <div className='App'>
                {DATA.map((item) => {
                    return (
                        <a  onClick={()=>setUrl(item.url)} className='radio-station'>
                            <img src={item.image} alt="" />
                        </a>
                    )
                })}

            </div>
            <div className='player'>

                <AudioPlayer
                    autoPlay
                    src={url}
                    onPlay={e => console.log("onPlay")}
                // other props here
                />

            </div>
        </div>
    )
}
export default App