import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Detail from './page/Detail'
import Main from './page/Main'
import Search from './page/Search'

function App() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  
  return (
    <>
      <header>
        <h1>Animals Information</h1>
        <div className='searchBar'>
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)} 
            placeholder="Search for an animal" />
          <button onClick={() => navigate(`/search?animal=${inputValue}`)}>Search</button>
        </div>
      </header>
      
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
      
      <footer>
        All rights reserved OzcodingSchool
      </footer>
    </>
  )
}

export default App;
