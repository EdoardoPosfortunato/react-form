import { useState } from 'react'
import './App.css'
import mangas from './data/manga.js'

function App() {

  const [mangaName, setMangaName] = useState("")
  const [mangaList, setMangaList] = useState(mangas)


  const newMangaName = (event) => {
    setMangaName(event.target.value)
    console.log(mangaName) // perchè logga quello prima !!!!!!!!
  } // questa è la funzione che modifica il mangaValue 

  const addNewManga = (event) => {
    event.preventDefault()
    let newManga = {
      id: mangaList.length + 1,
      title: mangaName
    }
    setMangaList([...mangaList, newManga])
    console.log(mangaList)
    setMangaName("")
  }

  return (
    <>
      <div className='container'>
        <h1 className='my-4'>MangaList</h1>
        <form
          className='d-flex flex-wrap justify-content-center my-5 gap-2'
          onSubmit={addNewManga}>
          <h3 className='col-12'>Inserisci un nuovo manga</h3>
          <div className='input-group mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-default">Titolo</span>
            <input
              value={mangaName} //imposta come valore inziale la stringa vuota
              onChange={newMangaName} //fa si che tutte le volte abbiamo un cambiamento si attivi la funzione
              className='form-control'
              aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
              type="text"
            />
          </div>
          <button className='btn btn-primary col-3'>aggiungi</button>
        </form>
        <ul className='list-group'>
          {mangaList.map((currManga, index) =>
            <li
              key={index}
              className='card my-2 p-2'
            > {currManga.title} </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default App
