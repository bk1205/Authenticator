import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { AiFillAudio, AiOutlineAudioMuted } from 'react-icons/ai';

//import './WC.css';

const WebCamComponent = () => {


    const [dim, setDim] = useState(document.querySelector('video')?.offsetHeight);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setDim(document.querySelector('video').offsetHeight)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    console.log(dim);
    const styles = {
        width: '100%',
        height: '30px',
        position: 'absolute',
        top: dim == null ? '90%' : `${dim + 42}px`,
        textAlign: 'center',
    }

    const handleMuting = () => {
        console.log(muted);
        setMuted(prev => !prev);
        
    }
    console.log(muted);
    return (
        <>
        <Webcam muted={muted} audio={muted} />
        <div className="overlay" style={styles}>
            {muted ? <AiOutlineAudioMuted color="red" size={dim == null ? '30px' : dim/15} onClick={handleMuting} /> : <AiFillAudio color="red" size={dim == null ? '30px' : dim/15} onClick={handleMuting}/>}
        </div>
        </>
    )
}

export default WebCamComponent;
