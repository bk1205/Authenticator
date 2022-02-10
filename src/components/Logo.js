import React from 'react'
import {Link} from 'react-router-dom';

export default function Logo(props) {


    const logoStyle = {
            flex: "0.1",
            marginTop: props.topMargin || "30px",
            marginBottom: props.bottomMargin || "50px",
            color: "#726a95",
            fontFamily: "'Newsreader', serif",
            fontSize: "2rem",
               
    }
    return (
        <div>
            <Link to={props.user ? '/app' : '/login'}><h2 style={logoStyle}>ChatRoom</h2></Link>
        </div>
    )
}
