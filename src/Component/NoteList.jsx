import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";


function NoteList({ notes , addNotes , deletenote }){
    return(
        <div className="note-list">
            {
                notes.map((notes)=> 
                <Note id={notes.id} text ={notes.text} date ={notes.date} deletenote={deletenote}/>
                )
            }
            <AddNote addNotes={addNotes}/>
        </div>
    )
}

export default NoteList