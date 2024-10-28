import style from './Main.module.css'
import { useRef } from 'react';
import Video from '../Video/Video';
import video1 from './videos/video1.mp4'
import video2 from './videos/video2.mp4'
import video3 from './videos/video3.mp4'
import video4 from './videos/video4.mp4'
const Main = () => {

  
    

    return (
        <div className={style.Main}>
            <div className={style.tytle}>
                <p>OUR WORKS</p>
                <h1>Make Engaging Experiences Happen</h1>
                <hr />

                <div className={style.body}>
                    
                <Video videoSRC = {video1}/>
                <Video videoSRC = {video2}/>
                <Video videoSRC = {video3}/>
                <Video videoSRC = {video4}/>
                </div>
            </div>
        </div>
    )
} 

export default Main