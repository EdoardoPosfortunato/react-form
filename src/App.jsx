import { useState } from 'react'
import './App.css'
import mangas from './data/manga.js'

function App() {

  const [mangaTitle, setmangaTitle] = useState("")
  const [mangaAuthor, setMangaAuthor] = useState("")
  const [mangaPlot, setMangaPlot] = useState("")
  const [mangaList, setMangaList] = useState(mangas)
  const [show, setShow] = useState(false)


  const updateTitle = (event) => {
    setmangaTitle(event.target.value)
  } // questa è la funzione che modifica il mangaTitle

  const updateAuthor = (event) => {
    setMangaAuthor(event.target.value)
  } // questa è la funzione che modifica il mangaTitle

  const updatePlot = (event) => {
    setMangaPlot(event.target.value)
  } // questa è la funzione che modifica il mangaTitle

  const addNewManga = (event) => {
    event.preventDefault()
    if(mangaAuthor !== "" && mangaTitle !== "" && mangaPlot !== "" ) {
    let newManga = {
      id: mangaList.length + 1,
      title: mangaTitle,
      author: mangaAuthor,
      plot: mangaPlot
    }
    setMangaList([...mangaList, newManga])
    console.log(mangaList)
    setmangaTitle("")
    setMangaAuthor('')
    setMangaPlot('')
    setShow(false)
  } else {
    setShow(true)
  }

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
              value={mangaTitle} //imposta come valore inziale la stringa vuota
              onChange={updateTitle} //fa si che tutte le volte abbiamo un cambiamento si attivi la funzione
              className='form-control'
              aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
              type="text"
            />
          </div>
          <div className='input-group mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-default">Autore</span>
            <input
              value={mangaAuthor} //imposta come valore inziale la stringa vuota
              onChange={updateAuthor} //fa si che tutte le volte abbiamo un cambiamento si attivi la funzione
              className='form-control'
              aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
              type="text"
            />
          </div>
          <div className='input-group mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-default">Trama in 5 parole</span>
            <input
              value={mangaPlot} //imposta come valore inziale la stringa vuota
              onChange={updatePlot} //fa si che tutte le volte abbiamo un cambiamento si attivi la funzione
              className='form-control'
              aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
              type="text"
            />
          </div>
          <button className='btn btn-primary col-3'>aggiungi</button>
        </form>
        {show && <p className='alert alert-warning'>Manca qualche informazione</p>}
        {/* ------------------------------------------------------------- */}
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
