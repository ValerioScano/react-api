import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from "axios"

const apiUrl = "https://lanciweb.github.io/demo/api/actresses/"



function App() {


  const [actressList, setActressList] = useState([])

  function getData(res) {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .catch((error) => console.log(error))
      .then((res) => setActressList(res.data))
  }

  useEffect(getData, [])


  return (
    <>
      <h1>Il mio progetto</h1>
      {actressList.map((actress) => {
        return <div key={actress.id}>{actress.name}, {actress.birth_year}, {actress.nationality}</div>
      })}
    </>
  )
}

export default App
