import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./Pages/Home"
import AdminPanel from "./Pages/AdminPanel"
import Services from "./Pages/Services"
import About from "./Pages/About"
import Contact from "./Pages/Contact"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/admin-panel" element={<AdminPanel/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
