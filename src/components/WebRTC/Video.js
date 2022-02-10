import React, { useRef, useState, useEffect } from 'react'

import { MdVideocam, MdVideocamOff } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getStream } from '../../store/actions';

const Video = () => {

    const videoElem = useRef(null);
    const [isPaused, setIsPaused] = useState(true);


    const dispatch = useDispatch();

    const localStream = useSelector(state => state.stream);

    useEffect(() => {
        getVideo()
    }, [videoElem]);

    const getVideo = async () => {
        const constraints = {
            'video': true,
            'audio': true
        }
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            const video = videoElem.current;
            if(stream) {
                dispatch(getStream(stream));
            }
            video.srcObject = stream;
            video.play();
            setIsPaused(video.paused);
        } catch (err) {
            console.error(err);
        }

    }
    console.log(localStream);
    const toggleVideo = () => {
        const video = videoElem.current;
        if (isPaused) {
            video.play();
            setIsPaused(video.paused);
            video.style.opacity = 1;
        } else {
            video.pause();
            setIsPaused(video.paused);
            video.style.opacity = 0.1;
        }
        console.log('after:', isPaused);
    }

    



    return (
        <div className="video">

            <video ref={videoElem} />
            {isPaused ? <MdVideocam size="50px" color="rgb(114, 106, 149)" className="video__icon" onClick={toggleVideo} /> : <MdVideocamOff size="50px" color="rgb(114, 106, 149)" className="video__icon" onClick={toggleVideo} />}

        </div>
    )
}

export default Video
