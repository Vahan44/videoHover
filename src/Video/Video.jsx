import style from './Video.module.css';
import { useRef } from 'react';


const Video = ({ videoSRC }) => {

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };


    return (

        <div className={style.body}>
            <video ref={videoRef} muted onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                <source src={videoSRC} type="video/mp4" />
            </video>

        </div>

    )
}


export default Video