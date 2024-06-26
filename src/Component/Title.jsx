import React from "react";


function Title({SetdarkMode}){
    return(
        <div className="Header">
            <h1>Notes</h1>
            <button onClick={()=>SetdarkMode(prev => !prev)} className="save">Toggle mode</button>
        </div>
    )
}

export default Title  