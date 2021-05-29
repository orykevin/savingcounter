import React from 'react'

const Info = ({displayInfo,setDis}) => {
    return (
        <div className={`info-cont ${displayInfo ? "info-display" : ""}`}>
            <span onClick={()=>{setDis(false);document.body.classList.remove('body-over')}}>x</span>
            <p className="info-header">go to my website to see my other project</p>
            <a href="https://orykevin.github.io">orykevin.com</a>
            <p className="info-footer">created by Ory Kevin</p>
        </div>
    )
}

export default Info
