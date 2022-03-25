import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { FcWebcam } from "react-icons/fc";
import { Avatar } from "@material-ui/core";
import Webcam from "react-webcam";

import "./Home.css";
import Logo from "./Logo";
import WebCamComponent from "./WebRTC/WebCam";
import { useEffect } from "react";
import { Entry } from "./WebRTC/Entry";

export default function Home() {
  const user = useSelector((state) => state);
  const [showVideo, setShowVideo] = useState(false);

  const localVideoref = useRef();

  useEffect(() => {
    var constraints = {
      video: true,
      audio: true,
    };
    async function getMedia(constraints) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        // console.log(stream.getAudioTracks()[0].getCapabilities()) ;
        localVideoref.current.srcObject = stream;
        localVideoref.current.muted = true;
      } catch (err) {
        /* handle the error */
        console.log(err);
      }
    }

    getMedia(constraints);
  }, []);

  return (
    <div>
      <div className="home__bar">
        <Logo user={user.auth} topMargin="0px" bottomMargin="0px" />

        <div className="bar__right">
          <video ref={localVideoref} autoPlay></video>
          <Entry />
          <Avatar alt="" src={user.auth.photoId} />
          {
            <a href="./auth/logout">
              <FiLogOut size="30px"></FiLogOut>
            </a>
          }
        </div>
      </div>
      {showVideo ? <WebCamComponent /> : null}
    </div>
  );
}
