import React, { useState, useEffect } from "react";

import { CallScreen } from "./CallScreen";
import { CallActions } from "./CallActions";
import socket from "./socket";

export const Entry = () => {
  const initState = {
    clientId: "",
    callFrom: "",
    localSrc: null,
    peersrc: null,
  };
  const [state, setState] = useState(initState);
  let pc = {};
  let config = null;

  const { clientId, callFrom, localSrc, peerSrc } = state;

  // useEffect(() => {
  //   socket
  //     .on("init", ({ id: clientId }) => {
  //       setState((prevState) => ({ ...prevState, cliendId: clientId }));
  //     })
  //     .on("request", ({ from: callFrom }) => {
  //       setState((prevState) => ({ ...prevState, callFrom: callFrom }));
  //     })
  //     .on("call", (data) => {
  //       if (data.sdp) {
  //         pc.setRemoteDescription(data.sdp);
  //         if (data.sdp.type === "offer") pc.createAnswer();
  //         else pc.addICECandidate(data.candidate);
  //       }
  //     })
  //     .on("end", )
  //     .emit("init");
  // }, []);

  return (
    <div>
      <CallScreen />
      <CallActions />
    </div>
  );
};
