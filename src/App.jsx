import { useState } from 'react'
import { useEffect } from 'react'
import style from "./App.module.css"
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
      <div className={style.flexcontainer}>
        {actressList.map((actress) => {
          return <>

            <div key={actress.id} className={style.card}>
              <img src={actress.image} alt={`${actress.name} image`} />
              {actress.name}, {actress.birth_year}, {actress.nationality}
            </div>

          </>
        })}
      </div>

    </>
  )
}

export default App
