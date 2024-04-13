import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./Pages/Home"
import AdminPanel from "./Pages/AdminPanel"
import Services from "./Pages/Services"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import { Dashboard } from "./components/Dashboard"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import SelectRole from "./Pages/SelectRole"
import CompanyLogin from "./Pages/CompanyLogin"
import CompanySignUp from "./Pages/CompanySignUp"


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
      <Route path="/login" element={<Login/>}/>
      <Route path="/company-login" element={<CompanyLogin/>}/>
      <Route path="/select-one" element={<SelectRole/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/company-sign-up" element={<CompanySignUp/>}/>
      </Route>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
