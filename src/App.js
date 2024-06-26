import React from "react";
import NoteList from "./Component/NoteList";
import { nanoid } from "nanoid";
import Search from "./Component/Search";
import Title from "./Component/Title";

function App() {
  const [searchText , SetSearchText] = React.useState("")
  const [darkmode , SetdarkMode] = React.useState(false)
  const [notes , setNotes] = React.useState(
    [
    {
    id: nanoid(),
    text : "This is our first Note",
    date : "16/2/2023"
    },
    {
      id: nanoid(),
      text : "This is our second notes",
      date : "17/2/2023"
      },
      {
        id: nanoid(),
        text : "This is our Third Note",
        date : "18/2/2023"
      },
      {
        id: nanoid(),
        text : "This is our fourth Note",
        date : "19/2/2023"
        }
  ]
    )

  React.useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app")
    )
    if(savedNotes){
      setNotes(savedNotes)
    }
  },[])
  React.useEffect(()=>{
    localStorage.setItem("react-notes-app", JSON.stringify(notes))
  },[notes])

  function addNotes(texts){
      const dates = new Date()
      const newNotes = {
        id : nanoid(),
        text : texts,
        date : dates.toLocaleDateString()
      }
      const res = [...notes , newNotes]
      setNotes(res)
  }
  function deletenote(id){
    const newNotes = notes.filter(note=> note.id !== id)
    setNotes(newNotes)
  }
 
  return (
    <div className={darkmode ? "darkMode" : ""}>
    <div className="container">
      <Title SetdarkMode={SetdarkMode}/>
      <Search SetSearchText={SetSearchText}/>
      <NoteList notes={notes.filter(note =>note.text.toLocaleLowerCase().includes(searchText))} addNotes={addNotes} deletenote={deletenote} />
    </div>
    </div>
  );
}

export default App;
