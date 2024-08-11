import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Destination from "./Destination"
import Crew from "./Crew"
import Technology from "./Technology"


const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
