import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Search({ SetSearchText }){
    return(
        <div className="search">
            <i class="bi bi-search"></i>
            <input 
            type="text" 
            placeholder="type to search..."
            onChange={(event)=>SetSearchText(event.target.value)}
            />
        </div>
    )
}

export default Search