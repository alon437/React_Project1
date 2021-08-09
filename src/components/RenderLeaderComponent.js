import React from "react";

function RenderLeader({leader})
{
    return(
            <div className = "box-leader">
                <div className = "img-leader box-leader-item"> <img src = {leader.image}/></div>
                <div className = "info-leader box-leader-item"> 
                    <h2>{leader.name}</h2>
                    <h4>{leader.designation}</h4>
                    <h6>{leader.description}</h6>
                </div>
            </div>
        
    );
}

export default RenderLeader ;