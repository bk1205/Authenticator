import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';
import { FcWebcam } from 'react-icons/fc'
import { Avatar } from '@material-ui/core';
import Webcam from "react-webcam";

import './Home.css';
import Logo from './Logo';
import WebCamComponent from './WebRTC/WebCam';

export default function Home() {

    const user = useSelector(state => state);
    const [showVideo, setShowVideo] = useState(false);
    
    const toggleWebCam = () => {
        setShowVideo(prev => !prev);
    }

    return (
        <div className="home">
            <div className="home__bar">

                <Logo user={user.auth} topMargin="0px" bottomMargin="0px" />

                <div className="bar__right">
                    <FcWebcam size="30px" onClick={toggleWebCam} />
                    <Avatar alt="" src={user.auth.photoId} />
                    <a href='./auth/logout' ><FiLogOut size="30px" ></FiLogOut></a>
                </div>
            </div>
            { showVideo ? <WebCamComponent/> : null}


        </div>
    )
}
