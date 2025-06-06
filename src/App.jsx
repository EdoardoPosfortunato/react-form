import { useState } from 'react'
import './App.css'
import mangas from './data/manga.js'

function App() {



  return (
    <>
      <div className='container'>
        <h1 className='my-4'>MangaList</h1>
        <ul className='list-group'>
          {mangas.map((currManga, index) =>
            <li 
            key={currManga.id}
            className='card'>{currManga.title}</li>
          )}
        </ul>
      </div>
    </>
  )
}

export default App
