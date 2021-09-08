import React from "react";
import './Footer.css'

function Footer(props) {
    return(
        <div className="row row-space">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="footerbar">
                <h6>@dCC Footer | <a href="/" target="_blank">Link#1</a> | <a href="/" target="_blank">Link#2</a> </h6>
                </div>
            </div>
        </div>
    )
}

export default Footer