import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Note({text , id , date , deletenote}){    
    return(
        <div className="note" key={id}>
            <span>{text} </span>
            <div className="note-footer">
                <small>{date}</small>
                <i class="bi bi-trash" onClick={()=>deletenote(id)}></i>
            </div>
        </div>
    )
}

export default Note