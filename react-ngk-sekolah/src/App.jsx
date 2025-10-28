import { fetchData } from "../api/fetchData"
import ResultSearch from "./components/ResultSearch"
import SearchBar from "./components/SeearchBar"
import { useEffect, useState } from "react"

function App() {
  const [keyword,setKeyword] = useState("")
  const getKeyword = (key)=>{
    setTimeout(()=>{
      setKeyword(key)
    },1000)
  }

  useEffect(()=>{
    fetchData("sekolah?page=1&perPage=5")
  },[])

  useEffect(()=>{
    if(keyword){
      fetchData(`sekolah/s?sekolah=${keyword}`)
    }
  },[keyword])
  return (
   <section id="home" className="space-y-10">
      <SearchBar fnGetKeyword={getKeyword}/>
      <ResultSearch/>
    </section>
)
}

export default App
