import { createContext, useEffect, useState } from "react"
import Router from "./Router"

const DataContext = createContext()

function App() {
  const [data , setData] = useState()
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Carlos-A-P/space-tourism-website-react/main/src/helpers/data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
      <DataContext.Provider value={data && data}>
         <Router />
      </DataContext.Provider>

  )
}

export default App
export { DataContext }
