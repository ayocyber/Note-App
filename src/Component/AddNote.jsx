import React from "react";


function AddNote({addNotes}){
    const [noteText , setNoteText] = React.useState("")
    const characterLimit = 200

    

    function handlechange(event){
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value)
        }else{
            return
        }
        
    }

    function handlesaveClick(){
        if(noteText.trim().length > 0){
            addNotes(noteText)
            setNoteText("")
        }
       
    }
    return(
        <div className="note new">
            <textarea 
            rows="8" 
            cols="10" 
            placeholder="add Notes"
            value={noteText}
            onChange={handlechange}
            >
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button className="save" onClick={handlesaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote