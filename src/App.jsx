import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import { Dashboard } from "./components/Dashboard"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import SelectRole from "./Pages/SelectRole"
import CompanyLogin from "./Pages/CompanyLogin"
import CompanySignUp from "./Pages/CompanySignUp"
import OrdersPage from "./Pages/AdminPages/OrdersPage"
import CompanysPage from "./Pages/AdminPages/CompanysPage"
import CustomersPage from "./Pages/AdminPages/CustomersPage"
import AnalyticsPage from "./Pages/AdminPages/AnalyticsPage"
import SettingPage from "./Pages/AdminPages/SettingPage"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
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
      <Route path="/orders" element={<OrdersPage/>}/>
      <Route path="/companys" element={<CompanysPage/>}/>
      <Route path="/customers" element={<CustomersPage/>}/>
      <Route path="/analytics" element={<AnalyticsPage/>}/>
      <Route path="/admin-setting" element={<SettingPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
